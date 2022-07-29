import { Button, Container } from "react-bootstrap"
import styled from "styled-components";

export function HomeView() {
    return (
        <Container>
        <Title>Musealize</Title>
        <Button>Teste</Button>
      </Container>
    );
}

const Title = styled.p`
  font-size: 3rem;
`