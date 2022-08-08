import { addDoc, collection } from "firebase/firestore"
import { Address } from "../entities/Address"
import { Estimate } from "../entities/Estimate"
import { calculateDistance } from "./calculateDistance"
import { db } from "./firebase"

export type NewEstimateInput = {
    startAddress: Address
    endAddress: Address
    description: string
    duration: string
    price: string
}

export const createEstimate = async ( {startAddress, endAddress, description, duration} : NewEstimateInput): Promise<Estimate> => {
    const {distanceDuration} = await calculateDistance({
        origin: startAddress,
        destination: endAddress
    })
    const estimateMinutes = Math.ceil(distanceDuration/60)
    const baseDuration = Number(duration)
    const getDuration = () =>{
        if (estimateMinutes <= baseDuration) {
            return baseDuration
        } else {
            return (estimateMinutes)
        }
        }
    const totalDuration = getDuration()
    const price = getPrice(estimateMinutes)
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

const getPrice = (minutes: number) => {
    let value = 10
    value += minutes + 0.005
    const min = 12
    if(value < min) {
        return min
    }
    return parseFloat(value.toFixed(2)) 
}