import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from 'yup';
import { createUser } from "../../services/createUser";
import { FirebaseError } from "firebase/app";
import {AuthErrorCodes} from "firebase/auth";
import { toast } from "react-toastify";

type FormValues = {
    name: string
    email: string
    phone: string
    password: string
    agree: boolean
}

export function RegisterView() {
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            agree: false
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required('Informe o nome da Instituição.'),
            email: yup.string()
                .required('Informe seu e-mail.')
                .email('Informe um e-mail válido.'),
            phone: yup.string()
                .required('Informe seu telefone.')
                .min(14, 'Registre um número válido.'),
            password: yup.string()
                .required('Digite uma senha')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, //eslint-disable-line
                    'A senha deve ter mínimo 8 caractéres, com uma letra maiúscula, uma minúscula, um número e um caractére especial.'),
            agree: yup.boolean()
                .equals([true], 'É preciso aceitar os Termos de Uso.')
        }),
        onSubmit: async (values, { setFieldError }) => {
            try {
                const user = await createUser(values)
                console.log('user', user)
            } catch (error) {
                if (error instanceof FirebaseError && error.code === AuthErrorCodes.EMAIL_EXISTS) {
                    setFieldError('email', 'Este e-mail já está em uso.')
                    return
                }
                toast.error('Não foi possível efetuar o cadastro. Tente novamente.')
            }
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
                                {...getFieldProps('name')}
                            />
                            <FormField
                                type='email'
                                label='E-mail'
                                placeholder='O e-mail será seu nome de usuário'
                                {...getFieldProps('email')}
                            />
                            <FormField
                                type='tel'
                                label='Telefone'
                                placeholder='(DD) 0000-0000'
                                mask={[
                                    { mask: '(00) 0000-0000' },
                                    { mask: '(00) 00000-0000' }
                                ]}
                                {...getFieldProps('phone')}
                                onAccept={value => formik.setFieldValue('phone', value)}
                            />
                            <FormField
                                type='password'
                                label='Senha'
                                placeholder='Informe sua senha de acesso'
                                {...getFieldProps('password')}
                            />
                            <Form.Group className='mb-3 mt-4' controlId='input-agree'>
                                <Form.Check
                                    {...formik.getFieldProps('agree')}
                                    type='checkbox'
                                    label={<span>Eu li e aceito os <a href='/termos-de-uso.pdf' target='_blank'>Termos de Uso</a>.</span>} />
                                <Form.Control.Feedback type='invalid' className={formik.touched.agree && formik.errors.agree ? 'd-block' : undefined}>
                                    {formik.errors.agree}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className='d-grid mb-4 mt-4'>
                                <CustomButton type='submit'>
                                    Criar conta
                                </CustomButton>
                            </div>
                        </Form>
                        <p className='text-center'>Já possui conta?<br />
                            <Link to='/login'> Faça Login</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}