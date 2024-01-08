import {createReducer} from '@reduxjs/toolkit'
import { addgoal, removegoal } from '../actions/goalAction'

let initstate = []


const goalreducer = createReducer(initstate, (builder) =>{
    builder.addCase(addgoal, (state, action) => {
        return [...state, action.payload]
    }).addCase(removegoal, (state, action) => {
        return state.filter((goal) => goal.id!==action.payload.id)
    })
})


export default goalreducer