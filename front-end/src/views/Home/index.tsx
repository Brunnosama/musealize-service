import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import bgMobile from "../../assets/img/bg-musealize-mobile.jpg"
import bgDesktop from "../../assets/img/bg-musealize.jpg"
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { selectIsUserLoggedIn } from "../../store/slices/userSlice";


export function HomeView() {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  return (
    <Layout startTransparent withoutMargin>
      <Banner className="vh-100">
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
          <Title className="text-white text-center text-lg-start mt-auto pt-5 mt-lg-0">Seja uma instituição parceira, crie seus roteiros culturais e receba visitantes!</Title>
          {isUserLoggedIn ? (
            <CustomButton size='lg' variant="secondary" className='mt-auto mt-lg-3 mb-3' to='/novo-roteiro'>Novo Roteiro</CustomButton>
          ) : (
            <>
              <CustomButton size='lg' variant="secondary" className='mt-auto mt-lg-3 mb-3' to='/cadastro'>Criar conta</CustomButton>
              <CustomButton size='lg' variant="secondary" className='mb-4' to='/login'>Fazer Login</CustomButton>
            </>
          )}

        </Container>
      </Banner >
    </Layout >

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
const Title = styled.h1`
font-size: 1.75rem;
font-weight: 600;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);

@media (min-width: 992px) {
  font-size: 2.35rem;
  max-width: 500px;
}
`