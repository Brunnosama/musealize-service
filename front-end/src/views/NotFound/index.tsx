import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NotFoundView() {
    return (
        <Layout>
            <Container className='text-center'>
                <PageTitle>
                    Página Não Encontrada
                </PageTitle>
                <p>A página que você está tentando acessar não foi encontrada ou não existe</p>
                <p>Utilize o menu acima para procurar novamente</p>
            </Container>

        </Layout>
    );
}