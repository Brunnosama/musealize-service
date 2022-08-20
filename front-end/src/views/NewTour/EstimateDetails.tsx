import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectHasCurrentEstimate } from "../../store/slices/estimateSlice";
import { EstimateFinish } from "./EstimateFinish";
import { EstimateMap } from "./EstimateMap";
import { EstimateNumbers } from "./EstimateNumbers";

export function EstimateDetails() {
    const hasCurrentEstimate = useSelector(selectHasCurrentEstimate)
    if (!hasCurrentEstimate) {
        return (
            <WithoutEstimateStyled className='d-none d-md-flex text-center'>
                <p className='m-0'>Preencha os dados ao lado para <br /> visualizar o percurso</p>
            </WithoutEstimateStyled>

        )
    } else {
        return (
            <WithEstimateStyled>
                <EstimateMap />
                <EstimateNumbers />
                <EstimateFinish />
            </WithEstimateStyled>
        )

    }

}

const WithoutEstimateStyled = styled.div`
background-color: #EFEFEF;
border: 1px dashed #686963;
height: 100%;
align-items: center;
justify-content: center;
`
const WithEstimateStyled = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`