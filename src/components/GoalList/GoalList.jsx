import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removegoal } from '../../redux/actions/goalAction'
function GoalList() {

let dispatch = useDispatch()
let goals = useSelector((state) => state.goal)

const handleRemove = (goal) => {
    dispatch(removegoal(goal))
}


  return (
    <div>
        {goals.map((goal) => (
            <li key={goal.id}>
                <h2>{goal.text}</h2>
                <button onClick={() => handleRemove(goal)} >
                    Remove Goal
                </button>
            </li>
        ))}
    </div>
  )
}

export default GoalList