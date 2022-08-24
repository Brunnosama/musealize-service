import { addDoc, collection } from "firebase/firestore"
import { Estimate } from "../entities/Estimate"
import { db } from "./firebase"

type NewTourInput = {
    estimate: Estimate
    gatewayId: string
    userId: string
}

export const createTour = async ({ estimate, gatewayId, userId }: NewTourInput): Promise<void> => {
    const friendlyId = new Date().getTime().toString(36).toUpperCase()
    const { id: estimateId, ...estimateData } = estimate
    const newTourData = {
        ...estimateData,
        estimateId,
        gatewayId,
        user: userId,
        friendlyId,
        status: 'CREATED',
        createdAt: new Date()
    }
    await addDoc(collection(db, 'tours'), newTourData)
}