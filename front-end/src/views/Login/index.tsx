import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from 'yup';

type FormValues = {
    email: string
    password: string
}


export function LoginView() {
    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .required('Informe seu e-mail.')
                .email('Informe um e-mail válido.'),
            password: yup.string()
                .required('Digite sua senha')
                // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, //eslint-disable-line
                //     'A senha deve ter no mínimo 8 caractéres, com uma letra maiúscula, uma minúscula, um número e um caractére especial.')
        }),

        onSubmit: async (values) => {
            console.log('values', values)
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
                            Login
                        </PageTitle>
                        <Form
                            className='mt-4'
                            onSubmit={formik.handleSubmit}>
                            <FormField
                                type='email'
                                label='E-mail'
                                placeholder='Digite o e-mail cadastrado'
                                {...getFieldProps('email')}
                            />
                            <FormField
                                type='password'
                                label='Senha'
                                placeholder='Informe sua senha de acesso'
                                {...getFieldProps('password')}
                            />
                            <div className='d-grid mb-4 mt-4'>
                                <CustomButton
                                    type='submit'
                                    loading={formik.isValidating || formik.isSubmitting}
                                    disabled={formik.isValidating || formik.isSubmitting}
                                >
                                    Entrar
                                </CustomButton>
                            </div>
                        </Form>
                        <p className='text-center'>Não possui conta?<br />
                            <Link to='/login'>Cadastre-se</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}