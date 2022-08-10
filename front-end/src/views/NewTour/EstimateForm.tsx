import { useFormik } from "formik"
import { Form } from "react-bootstrap"
import { AutocompleteField } from "../../components/AutocompleteField"
import { CustomButton } from "../../components/CustomButton"
import { FormField } from "../../components/FormField"
import { Address } from "../../entities/Address"
import * as yup from 'yup';
import { createEstimate, NewEstimateInput } from "../../services/createEstimate"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentEstimate, setCurrentEstimate } from "../../store/slices/estimateSlice"

type FormValues = {
    startAddress: Address | null
    endAddress: Address | null
    description: string
    value: string
    duration: string
}

export function EstimateForm() {
    const dispatch = useDispatch()
    const currentState = useSelector(selectCurrentEstimate)
    const formik = useFormik<FormValues>({
        initialValues: {
            startAddress: null,
            endAddress: null,
            description: '',
            value:'',
            duration: '',
        },
        validationSchema: yup.object().shape({
            startAddress: yup.object()
                .typeError('Selecione um endereço na lista.'),
            endAddress: yup.object()
                .typeError('Selecione um endereço na lista.'),
            description: yup.string()
                .required('Descreva o seu roteiro.'),
            value: yup.string()
                .required('Digite o valor base do ingresso'),
            duration: yup.string()
                .required('Informe a duração do percurso.')
                .min(2)
                .max(6),

        }),

        onSubmit: async (values) => {
           const estimate =  await createEstimate(values as NewEstimateInput)
           dispatch(setCurrentEstimate(estimate))
        }

    })
    const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid: formik.touched[fieldName] && !formik.errors[fieldName],
            disabled: !!currentState
        }
    }
    return (
        <Form onSubmit={formik.handleSubmit}>
            <AutocompleteField
                {...getFieldProps('startAddress')}
                label="Ponto de partida (A)"
                placeholder='Infome o endereço completo'
                onChange={(address) => formik.setFieldValue('startAddress', address)}
            />
            <AutocompleteField
                {...getFieldProps('endAddress')}
                label="Ponto de encerramento (B)"
                placeholder='Infome o endereço completo'
                onChange={(address) => formik.setFieldValue('endAddress', address)}
            />
            <FormField
                {...getFieldProps('description')}
                label="Descrição do Roteiro"
                placeholder='Descreva o passo a passo e as atividades do roteiro'
                as='textarea'
            />
            <FormField
                label='Valor do Ingresso (em reais)'
                placeholder='Informe o valor cobrado pelo ingresso. Esse será o valor base'
                mask={[
                    { mask: 'R$ 0' },
                    { mask: 'R$ 00' },
                    { mask: 'R$ 000' }
                ]}
                {...getFieldProps('value')}
                onAccept={value => formik.setFieldValue('value', value)}
            />
            <FormField
                label='Duração do Percurso (em minutos)'
                placeholder='Informe a duração do evento em minutos'
                mask={[
                    { mask: '0' },
                    { mask: '00' },
                    { mask: '000' }
                ]}
                {...getFieldProps('duration')}
                onAccept={value => formik.setFieldValue('duration', value)}
            />
            <div className='d-grid d-md-block'>
                <CustomButton
                    type='submit'
                    loading={formik.isValidating || formik.isSubmitting}
                    disabled={formik.isValidating || formik.isSubmitting}
                >Registrar roteiro
                </CustomButton>
            </div>

        </Form>
    )
}