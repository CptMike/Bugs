import { createSlice } from '@reduxjs/toolkit'

let lastId = 0;

export const slice = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        //actions => action handlers
        projectAdded: (projects, action) => {
            projects.push({
                id: ++lastId,
                name: action.payload.name        
            })
        }
    }
})

export default slice.reducer
export const { projectAdded } = slice.actions;
