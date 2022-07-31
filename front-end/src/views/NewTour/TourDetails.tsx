import styled from "styled-components";

export function TourDetails() {
    return (
        <WithoutTourStyled className='d-none d-md-flex text-center'>
            <p className='m-0'>Preencha os dados ao lado para <br/> visualizar o percurso</p>
        </WithoutTourStyled>

    );
}

const WithoutTourStyled = styled.div`
background-color: #EFEFEF;
border: 1px dashed #686963;
height: 100%;
align-items: center;
justify-content: center;

`