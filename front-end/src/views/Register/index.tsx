import { useFormik } from "formik";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from 'yup';

type FormValues = {
    companyName: string
    companyEmail: string
    companyPhone: string
    companyPassword: string
    companyAgree: boolean
}

export function RegisterView() {
    const formik = useFormik<FormValues>({
        initialValues: {
            companyName: '',
            companyEmail: '',
            companyPhone: '',
            companyPassword: '',
            companyAgree: false
        },
        validationSchema: yup.object().shape({
            companyName: yup.string()
                .required('Informe o nome da Instituição.'),
            companyEmail: yup.string()
                .required('Informe seu e-mail.')
                .email('Informe um e-mail válido.'),
            companyPhone: yup.string()
                .required('Informe seu telefone.')
                .min(14, 'Registre um número válido.'),
            companyPassword: yup.string()
                .required('Digite uma senha')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, //eslint-disable-line
                'No mínimo 8 caractéres, com uma Maiúscula, uma minúscula, um número e um caractére especial.'),
            companyAgree: yup.boolean()
                .equals([true], 'É preciso aceitar os Termos de Uso.')
        }),
        onSubmit: (values) => {
            console.log('oi!', values)
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
        <Layout>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <PageTitle>
                            Nova Conta
                        </PageTitle>
                        <Form
                            className='mt-4'
                            onSubmit={formik.handleSubmit}>
                            <FormField
                                label='Nome da Instituição'
                                placeholder='Digite o nome da Instituição'
                                {...getFieldProps('companyName')}

                            // isInvalid
                            // mask={[
                            //     { mask: '' }
                            // ]}
                            />
                            <FormField
                                type='email'
                                label='E-mail'
                                placeholder='O e-mail será seu nome de usuário'
                                // error='Preencha um e-mail válido.'
                                {...getFieldProps('companyEmail')}
                            // isInvalid
                            // mask={[
                            //     { mask: '' }
                            // ]}
                            />
                            <FormField
                                type='tel'
                                label='Telefone'
                                placeholder='(DD) 0000-0000'
                                // error='Registre um número válido.'
                                mask={[
                                    { mask: '(00) 0000-0000' },
                                    { mask: '(00) 00000-0000' }
                                ]}
                                {...getFieldProps('companyPhone')}
                                onAccept={value => formik.setFieldValue('companyPhone', value)}
                            // isInvalid
                            />
                            <FormField
                                type='password'
                                label='Senha'
                                placeholder='Informe sua senha de acesso'
                                // error='Registre um número válido.'
                                {...getFieldProps('companyPassword')}
                            // isInvalid
                            // mask={[
                            //     { mask: '' }
                            // ]}
                            />
                            <FormGroup className='mb-3 mt-4' controlId='input-company-agree'>
                                <Form.Check
                                    {...getFieldProps('companyAgree')}
                                    type='checkbox'
                                    label={<>Eu li e aceito os <a href='/termos-de-uso.pdf' target='_blank'>Termos de Uso</a>.</>}
                                />
                                {formik.touched.companyAgree && formik.errors.companyAgree && (
                                    <Form.Control.Feedback type='invalid' className='d-block'>
                                        {formik.errors.companyAgree}
                                    </Form.Control.Feedback>
                                )}
                                <div className='d-grid mb-4 mt-4'>
                                    <CustomButton type='submit'>
                                        Criar conta
                                    </CustomButton>
                                </div>
                                <p className='text-center'>Já possui conta?<br />
                                    <Link to='/login'> Faça Login</Link></p>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}