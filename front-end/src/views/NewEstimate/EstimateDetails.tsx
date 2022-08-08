import styled from "styled-components";

export function EstimateDetails() {
    return (
        <WithoutEstimateStyled className='d-none d-md-flex text-center'>
            <p className='m-0'>Preencha os dados ao lado para <br/> visualizar o percurso</p>
        </WithoutEstimateStyled>

    );
}

const WithoutEstimateStyled = styled.div`
background-color: #EFEFEF;
border: 1px dashed #686963;
height: 100%;
align-items: center;
justify-content: center;

`