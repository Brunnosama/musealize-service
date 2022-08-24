import { useDispatch, useSelector } from "react-redux";
import { PayPalButton } from "../../components/PayPalButton";
import { clearCurrentEstimate, selectCurrentEstimate } from "../../store/slices/estimateSlice";
import { OrderResponseBody } from '@paypal/paypal-js'
import { toast } from "react-toastify";
import { createTour } from "../../services/createTour";
import { selectUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export function EstimateFinish() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!currentEstimate || !user) {
        return null
    }
    const handlePayPalSuccess = async (details: OrderResponseBody) => {
        try {
        await createTour({
                estimate: currentEstimate,
                gatewayId: details.id,
                userId: user.id

            })
            dispatch(clearCurrentEstimate())
            navigate('/novo-roteiro/sucesso')

        } catch {
            toast.error('Falha ao processar o pagamento. Por favor, entre em contato.')
        }
    }
    const handlePayPalError = () => {
        toast.error('Ocorreu um erro ao realizar o pagamento. Por favor, entre em contato.')
    }
    return (
        <div className='mt-3'>
            <PayPalButton
                price={currentEstimate.price}
                customId={currentEstimate.id}
                onSuccess={handlePayPalSuccess}
                onError={handlePayPalError}
            />
        </div>


    );
}