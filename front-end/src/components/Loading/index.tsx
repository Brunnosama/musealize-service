import { Spinner } from "react-bootstrap";
import styled from "styled-components";

export function Loading() {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <StyledSpinner animation="border" role="status">
                <span className="visually-hidden">Carregando...</span>
            </StyledSpinner>
        </div>

    );
}

const StyledSpinner = styled(Spinner)`
    color: #3D2283;
`