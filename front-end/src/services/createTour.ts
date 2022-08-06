import { addDoc, collection } from "firebase/firestore"
import { Address } from "../entities/Address"
import { calculateDistance } from "./calculateDistance"
import { db } from "./firebase"

export type NewTourInput = {
    startAddress: Address
    endAddress: Address
    description: string
    duration: string
    price: string
}

export const createTour = async ( {startAddress, endAddress, description, duration} : NewTourInput) => {
    const {distanceDuration} = await calculateDistance({
        origin: startAddress,
        destination: endAddress
    })
    const tourMinutes = Math.ceil(distanceDuration/60)
    const baseDuration = Number(duration)
    const getDuration = () =>{
        if (tourMinutes <= baseDuration) {
            return baseDuration
        } else {
            return (tourMinutes)
        }
        }
    const totalDuration = getDuration()
    const price = getPrice(tourMinutes)
    const tourData = {
        tourMinutes,
        baseDuration,
        totalDuration,
        price,
        startAddress,
        endAddress,
        description, 
    }
    await addDoc(collection(db, 'tours'), tourData)
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