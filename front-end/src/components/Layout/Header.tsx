import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoYDetail from "../../assets/img/logo-musealize-yellow-detail.svg"
import Logo from "../../assets/img/logo-musealize-purple.svg"
import { CustomButton } from '../CustomButton';

export function Header() {
    const [isTransparent, setIsTransparent] = useState(true)
    useEffect(() => {
        const scrollChange = () => {
            const isLowScroll = window.scrollY < 60
            if (isLowScroll !== isTransparent) {
                setIsTransparent(isLowScroll)
            }
        }
        window.addEventListener('scroll', scrollChange)
        return () => {
            window.removeEventListener('scroll', scrollChange)
        }
    }, [isTransparent])
    return (
        <Navbar fixed='top' expand="lg" bg={isTransparent ? undefined : 'white'}>
            <Container>
                <Navbar.Brand to='/' as={Link}>
                    <img src={isTransparent ? LogoYDetail : Logo} alt="Musealize" width={159} height={52} />
                </Navbar.Brand>
                <NavbarToggleStyled aria-controls="basic-navbar-nav" >
                    <FontAwesomeIcon icon={faBars} className={isTransparent ? 'text-white' : 'text-warning'} size='lg' />
                </NavbarToggleStyled>
                <NavbarCollapsedStyled id="basic-navbar-nav" className='justify-content-center text-center'>
                    <Nav className="ms-auto">
                        <NavLinkStyled forwardedAs={Link} to='/'>Início</NavLinkStyled>
                        <CustomButton className='mt-2 mt-lg-0 ms-lg-4' to='/cadastro'>Criar conta</CustomButton>
                        <CustomButton className='mt-2 mt-lg-0 ms-lg-4' to='/login'>Fazer Login</CustomButton>
                    </Nav>
                </NavbarCollapsedStyled>
            </Container>
        </Navbar>
    );
}

const NavbarCollapsedStyled = styled(Navbar.Collapse)`
@media (max-width: 991px) {
    background-color: #fff;
    margin: 0 -12px;
    padding: 0.75rem 2rem; 
}
`
const NavbarToggleStyled = styled(Navbar.Toggle)`
    border: none;
`
const NavLinkStyled = styled(Nav.Link)`
    color: #3D2283 ;
    font-weight: 600;
@media(min-width: 992px) {
    color: #fff !important;
}
`