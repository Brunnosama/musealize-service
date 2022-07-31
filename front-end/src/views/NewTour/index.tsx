import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { TourDetails } from "./TourDetails";
import { TourForm } from "./TourForm";

export function NewTourView() {
    return (
        <Layout>
            <Container>
                <PageTitle>
                    Novo Roteiro
                </PageTitle>
                <Row>
                    <Col xs={12} md={6} lg={7}>
                    <TourForm />
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                    <TourDetails />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
} 