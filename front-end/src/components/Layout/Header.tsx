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

type Props = {
    startTransparent?: boolean
}

export function Header({startTransparent = false}: Props) {
    const [isTransparent, setIsTransparent] = useState(startTransparent)
    useEffect(() => {
        const scrollChange = () => {
            const isLowScroll = window.scrollY < 60
            if (startTransparent && isLowScroll !== isTransparent) {
                setIsTransparent(isLowScroll)
            }
        }
        window.addEventListener('scroll', scrollChange)
        return () => {
            window.removeEventListener('scroll', scrollChange)
        }
    }, [isTransparent, startTransparent])
    return (
        <NavbarStyled fixed='top' expand="lg" bg={isTransparent ? undefined : 'white'}>
            <Container>
                <Navbar.Brand to='/' as={Link}>
                    <ImageStyled src={isTransparent ? LogoYDetail : Logo} alt="Musealize" width={159} height={52} />
                </Navbar.Brand>
                <NavbarToggleStyled aria-controls="basic-navbar-nav" >
                    <FontAwesomeIconStyled icon={faBars} className={isTransparent ? 'text-white' : 'text-purple'} size='lg' />
                </NavbarToggleStyled>
                <NavbarCollapsedStyled id="basic-navbar-nav" className='justify-content-center text-center'>
                    <Nav className="ms-auto">
                        <NavLinkStyled forwardedAs={Link} to='/' className={isTransparent ? '' : 'text-purple'}>Início</NavLinkStyled>
                        <CustomButton variant={isTransparent ? 'primary' : 'secondary'} className='mt-2 mt-lg-0 ms-lg-4' to='/cadastro'>Criar conta</CustomButton>
                        <CustomButton variant={isTransparent ? 'primary' : 'secondary'} className='mt-2 mt-lg-0 ms-lg-4' to='/login'>Fazer Login</CustomButton>
                    </Nav>
                </NavbarCollapsedStyled>
            </Container>
        </NavbarStyled>
    );
}
const NavbarStyled = styled(Navbar)`
    transition: all .3s linear;
    ${props => props.bg === 'white' && `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
`};
`

const ImageStyled = styled.img`
@media(min-width: 992px) {
    width: 200px;
    height: auto;
}
`

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
    color: #FFDC50 !important;
    ${props => props.className === 'text-purple' && `
    color: #3D2283 !important;
    `}
}
`
const FontAwesomeIconStyled = styled(FontAwesomeIcon)<Pick<Props, 'startTransparent'>>`
    ${props => !props.startTransparent && `
    color: #FFDC50 !important;
    `}
    ${props => props.className === 'text-purple' && `
    color: #3D2283 !important;
    `}
    `