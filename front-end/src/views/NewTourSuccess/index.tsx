import { Col, Container, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NewTourSuccessView() {
    return (
        <Layout>
            <Container className='text-center'>
                <Row className='justify-content-center'>
                    <Col md={8} lg={6} xl={5}>
                    <PageTitle>Roteiro criado com sucesso!</PageTitle>
                    <p>Os dados de inscrições à visita registrada serão enviados ao e-mail cadastrado.</p>
                    <CustomButton variant='primary' size='lg' to='/novo-roteiro'>Criar outro Roteiro</CustomButton>
                    </Col>
                </Row>
            </Container>
        </Layout>

    );
}
