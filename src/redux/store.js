import {configureStore} from '@reduxjs/toolkit'
import goalreducer from './reducer/goalReduce'


const store  = configureStore({
    reducer:{
        goal: goalreducer
    }
})

export default store