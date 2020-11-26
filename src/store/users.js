import { createSlice } from '@reduxjs/toolkit'

let lastId = 0;

export const slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        //actions => action handlers
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})

export default slice.reducer
export const { userAdded } = slice.actions;
