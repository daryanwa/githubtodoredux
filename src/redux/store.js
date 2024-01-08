import {configureStore} from '@reduxjs/toolkit'



const store  = configureStore({
    reducer:{
        goal: goalReducer
    }
})

export default store