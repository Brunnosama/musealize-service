import { Address } from "./Address"

export type Tour = {
    id: string,
    tourMinutes: number,
    baseDuration: number,
    totalDuration: number,
    price: number,
    startAddress: Address
    endAddress: Address
    description: string
} 