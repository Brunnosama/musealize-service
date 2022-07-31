import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { User } from "../../entities/User";

type UserState = {
    loadingUser: boolean
    user: User | null
}

const initialState: UserState = {
    loadingUser: true,
    user: null
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state: any, action: PayloadAction<User>) => {
            console.log('O state é', state)
            console.log('Ação q chegou', action)
        },
        deleteUser: () => {

        }
    }
})

export const {updateUser, deleteUser} = slice.actions

export default slice.reducer