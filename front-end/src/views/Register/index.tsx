import { Container, Form, FormGroup } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView() {
    return (
        <Layout>
            <Container>
                <PageTitle>
                    Nova Conta
                </PageTitle>
                <Form>
                    <FormField
                        label='Nome da Instituição'
                        placeholder='Digite o nome da Instituição'
                        controlId='input-company-name'
                        error='Preencha seu nome.'
                        isInvalid
                        mask={[
                            { mask: '000.000.000-00' }
                        ]}
                    />
                    <FormField
                        type='email'
                        label='E-mail'
                        placeholder='O e-mail será seu nome de usuário'
                        controlId='input-company-email'
                        error='Preencha um e-mail válido.'
                        isInvalid
                        mask={[
                            { mask: '000.000.000-00' }
                        ]}
                    />
                    <FormField
                        type='tel'
                        label='Telefone'
                        placeholder='(00) 0000-0000'
                        controlId='input-company-phone'
                        error='Registre um número válido.'
                        isInvalid
                        mask={[
                            { mask: '(00) 0000-0000' },
                            { mask: '(00) 00000-0000' }
                        ]}
                    />
                    <FormField
                        type='password'
                        label='Senha'
                        placeholder='Informe sua senha de acesso'
                        controlId='input-company-password'
                        error='Registre um número válido.'
                        isInvalid
                        mask={[
                            { mask: '(00) 0000-0000' },
                            { mask: '(00) 00000-0000' }
                        ]}
                    />
                    <FormGroup className='mb-3' controlId='input-company-agree'>
                        <Form.Check
                            type='checkbox'
                            label={<>Eu li e aceito os <a href='/termos-de-uso.pdf' target='_blank'>Termos de Uso</a>.</>} 
                        />
                    <CustomButton>
                        Criar conta
                    </CustomButton>
                    </FormGroup>
                </Form>
            </Container>
        </Layout>
    );
}