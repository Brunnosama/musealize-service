
import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import bgMobile from "../../assets/img/bg-musealize-mobile.jpg"
import bgDesktop from "../../assets/img/bg-musealize.jpg"

export function HomeView() {
  return (
    <Banner className="vh-100">
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
        <Title className="text-white text-center text-lg-start mt-auto mt-lg-0">Seja uma instituição parceira, crie seus roteiros culturais e receba visitantes!</Title>
        <ButtonStyled size='lg' className='mt-auto mt-lg-3 mb-3'>Criar conta</ButtonStyled>
        <ButtonStyled size='lg' className='mb-4'>Fazer Login</ButtonStyled>
      </Container>
    </Banner>
  );
}

const Banner = styled.div`
background:url(${bgMobile}) no-repeat center center;
background-size: cover;
@media (min-width: 576px) {
  background-image:url(${bgDesktop});
}
@media(min-width: 768px) {
  background-image:url(${bgMobile});
}
@media(min-width: 992px) {
  background-image:url(${bgDesktop});
}
`
const ButtonStyled = styled(Button)`
background-color: #FFDC50;
color: #3D2283;
font-weight: 700;
`
const Title = styled.h1`
font-size: 2rem;
font-weight: 600;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);

@media (min-width: 992px) {
  font-size: 2.35rem;
  max-width: 500px;
}
`