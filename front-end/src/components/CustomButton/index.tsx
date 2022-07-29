import { Button, ButtonProps, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

type Props = ButtonProps & {
    loading?: boolean
    to?: string
}

export function CustomButton({ children, loading, to, ...otherProps }: Props) {
    const button = (
        <ButtonStyled {...otherProps} >
            {loading && (
                <Spinner animation='border' role='status' size='sm' className='me-2'>
                    <span className='visually-hidden'>Carregando...</span>
                </Spinner>
            )}
            {children}
        </ ButtonStyled>
    )
    if (to) {
        return (
            <LinkContainer to={to}>
                {button}
            </LinkContainer>
        )
    }
    return button
}

const ButtonStyled = styled(Button)`
padding-left: 40px;
padding-right: 40px;
font-weight: 600;
border-radius: 0px;
border: none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
${props => props.size === 'lg' && `
    font-size: 1.125rem
`};

${props => (props.variant === 'primary' || !props.variant) && `
background-color: #FFDC50;
color: #3D2283;
&:hover{
        background-color: #3D2283;
        color: #FFDC50;}
`};
${props => props.variant === 'secondary' && `
background-color:  #3D2283;
color: #FFDC50;
&:hover{
    background-color: #FFDC50;
    color: #3D2283;}
`};
${props => props.variant === 'outline-primary' && `
border: 2px solid #FFDC50 !important;
color: #FFDC50;
font-weight: 700;
box-shadow: none;
&:hover{
    background-color: #FFDC50;
    color: #3D2283;
`};
`