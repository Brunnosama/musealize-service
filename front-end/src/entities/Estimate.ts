import { Address } from "./Address"

export type Estimate = {
    id: string,
    estimateMinutes: number,
    baseDuration: number,
    totalDuration: number,
    price: number,
    startAddress: Address
    endAddress: Address
    description: string
} 