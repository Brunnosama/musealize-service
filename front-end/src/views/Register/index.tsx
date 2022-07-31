import { useFormik } from "formik";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

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
        onSubmit: (values) => {
            console.log('oi!', values)
        }
    })
    const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`
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
                                error='Preencha seu nome.'
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
                                error='Preencha um e-mail válido.'
                                {...getFieldProps('companyEmail')}
                            // isInvalid
                            // mask={[
                            //     { mask: '' }
                            // ]}
                            />
                            <FormField
                                type='tel'
                                label='Telefone'
                                placeholder='(00) 0000-0000'
                                error='Registre um número válido.'
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
                                error='Registre um número válido.'
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