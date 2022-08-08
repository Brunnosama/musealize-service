import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import tourReducer from './slices/tourSlice';

const store = configureStore({
    reducer: {
        userData: userReducer,
        tourData: tourReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>