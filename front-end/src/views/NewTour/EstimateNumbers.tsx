import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";

export function EstimateNumbers() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    if (!currentEstimate) {
        return null
    }
    return (
        <WrapStyled>
            <NumberItem>
                    <span>Duração</span>
                    {currentEstimate.totalDuration} min
            </NumberItem>
            <NumberItem>
                    <span>Valor</span>
                    {currentEstimate.price.toLocaleString('pt-br',{currency: 'BRL', style:'currency'})}
            </NumberItem>
        </WrapStyled>
    );
}

const WrapStyled = styled.div`
    background: #EAEAEA;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
`
const NumberItem = styled.p`
    margin: 0;
    text-align: center;
    span{
        display:block;
        font-size: 0.875rem;
    }
`