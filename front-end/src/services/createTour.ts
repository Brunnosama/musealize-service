import { Address } from "../entities/Address"
import { calculateDistance } from "./calculateDistance"

export type NewTourInput = {
    startAddress: Address
    endAddress: Address
    description: string
    duration: string
    price: string
}

export const createTour = async ( {startAddress, endAddress} : NewTourInput) => {
    await calculateDistance({
        origin: startAddress,
        destination: endAddress
    })
}