import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addgoal } from '../../redux/actions/goalAction'
function Form() {


let dispatch = useDispatch()
let [goal, setGoal] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
        addgoal({
            id: Date.now(),
            text: goal
        })
    )
}

const handleChange = (e) => {
    const {value} = e.currentTarget
    setGoal(value)
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
               <span>Goal: </span>
               <input type='text' value={goal} onChange={handleChange} />
            </label>
            <button type='submit'>Add Goal</button>
        </form>
    </div>
  )
}

export default Form