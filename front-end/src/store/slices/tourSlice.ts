import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Tour } from "../../entities/Tour"

type TourState = {
    currentTour: Tour | null
}

const initialState: TourState = {
    currentTour: null
}

const slice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        setCurrentTour: (state, action: PayloadAction<Tour>) => {
            state.currentTour = action.payload
        },
        clearCurrentTour: () => initialState
    }
})

export const {setCurrentTour, clearCurrentTour} = slice.actions

export default slice.reducer