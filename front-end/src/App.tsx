import { Button, Container } from "react-bootstrap"
import styled from "styled-components";

function App() {
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

export default App;
