import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../../assets/img/logo-musealize-white.svg"

type Props = {
    withoutMargin?: boolean
}

export function Footer({withoutMargin = false}: Props) {
    return (
        <FooterStyled className={`text-center ${withoutMargin ? '' : 'mt-5'}`}>
            <Container className='d-lg-flex align-items-center'>
                <Link to='/' className='me-lg-auto'>
                    <ImageStyled src={LogoWhite} alt="Musealize" width={195} height={64} />
                </Link>
                <Nav className='flex-column flex-lg-row my-4 my-lg-0'>
                    <Nav.Link as={Link} to='/' className='text-white'>Início</Nav.Link>
                    <Nav.Link as={Link} to='/cadastro' className='text-white'>Cadastro</Nav.Link>
                    <Nav.Link as={Link} to='/login' className='text-white'>Login</Nav.Link>
                    <Nav.Link href='/termos-de-uso.pdf' target='_blank' className='text-white'>Termos de Uso</Nav.Link>
                </Nav>

                <Nav className='justify-content-center'>
                    <NavFooterStyled href='https://facebook.com' target='_blank'>
                        <IconStyled icon={faFacebookSquare} className='text-white' />
                    </NavFooterStyled>
                    <NavFooterStyled href='https://instagram.com' target='_blank'>
                        <IconStyled icon={faInstagramSquare} className='text-white' />
                    </NavFooterStyled>
                </Nav>
            </Container>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
background: #686963;
padding: 30px 0 20px;
@media(min-width: 992px) {
    padding: 15px 0;
}
`
const IconStyled = styled(FontAwesomeIcon)`
font-size: 40px;
`

const NavFooterStyled = styled(Nav.Link)`
padding: 0 8px;
`

const ImageStyled = styled.img`
@media(min-width: 992px) {
    width:181px;
    height:59px;
}
`