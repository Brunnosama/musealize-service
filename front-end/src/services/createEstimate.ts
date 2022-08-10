import { addDoc, collection } from "firebase/firestore"
import { Address } from "../entities/Address"
import { Estimate } from "../entities/Estimate"
import { calculateDistance } from "./calculateDistance"
import { db } from "./firebase"

export type NewEstimateInput = {
    startAddress: Address
    endAddress: Address
    description: string
    value: string
    duration: string
    price: string
}

export const createEstimate = async ( {startAddress, endAddress, description, value, duration} : NewEstimateInput): Promise<Estimate> => {
    const {distanceDuration} = await calculateDistance({
        origin: startAddress,
        destination: endAddress
    })
    const estimateMinutes = Math.ceil(distanceDuration/60)
    const baseDuration = Number(duration.replace(/\D/g,''))
    const basePrice = Number(value.replace(/\D/g,''))
    const getDuration = () =>{
        if (estimateMinutes <= baseDuration) {
            return baseDuration
        } else {
            return (estimateMinutes)
        }
        }
    const totalDuration = getDuration()
    const price = getPrice(estimateMinutes, basePrice)
    const estimateData = {
        estimateMinutes,
        baseDuration,
        totalDuration,
        price,
        startAddress,
        endAddress,
        description, 
    }
    const res = await addDoc(collection(db, 'estimates'), estimateData)
    return {
        id: res.id,
        ...estimateData
    }
}

const getPrice = (minutes: number, price: number) => {
    let value = price
    value += (minutes * 0.05);
    const min = (price+2)
    if(value < min) {
        return parseFloat(min.toFixed(2))
    }
    return parseFloat(value.toFixed(2)) 
}