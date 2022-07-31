import { useFormik } from "formik"
import { Form } from "react-bootstrap"
import { AutocompleteField } from "../../components/AutocompleteField"
import { CustomButton } from "../../components/CustomButton"
import { FormField } from "../../components/FormField"

type FormValues = {
    startAddress: string
    endAddress: string
    description: string
    duration: string
    price: string
}

export function TourForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            startAddress: '',
            endAddress: '',
            description: '',
            duration: '',
            price: '',
        },
        onSubmit: async (values) => {
            console.log(values)
        }

    })
    const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid: formik.touched[fieldName] && !formik.errors[fieldName]
        }
    }
    return (
        <Form onSubmit={formik.handleSubmit}>
            <AutocompleteField
                {...getFieldProps('startAddress')}
                label="Ponto de partida (A)"
                placeholder='Infome o endereço completo'
            />
            <AutocompleteField
                {...getFieldProps('endAddress')}
                label="Ponto de encerramento (B)"
                placeholder='Infome o endereço completo'
            />
            <FormField
                {...getFieldProps('description')}
                label="Descrição do Roteiro"
                placeholder='Descreva o passo a passo e as atividades do roteiro'
                as='textarea'
            />
            <FormField
                {...getFieldProps('duration')}
                label="Duração do Percurso"
                placeholder='Informe a duração do evento'
            />
            <FormField
                {...getFieldProps('price')}
                label="Valor do Ingresso"
                placeholder='Infome o preço cobrado pelo evento'
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