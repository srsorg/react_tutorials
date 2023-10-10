import { data } from './../data'
import React, { useReducer } from 'react'

// first set defalt state
const defaultPeopleState = {
  people: data,
}
const RESET_PEOPLE = 'RESET'
const CLEAR_PEOPLE = 'CLEAR'
const REMOVE_PEOPLE = 'REMOVE'

// then create a reducer
const peopleReducer = (state, action) => {
  console.log(state)
  if (action.type === RESET_PEOPLE) {
    return { ...state, people: data }
  } else if (action.type === CLEAR_PEOPLE) {
    return { ...state, people: [] }
  } else if (action.type === REMOVE_PEOPLE) {
    return {
      ...state,
      people: state.people.filter((fpl) => fpl.id !== action.payload.id),
    }
  }
}

function ArrayList() {
  const [peopleState, peopleDispatcher] = useReducer(
    peopleReducer,
    defaultPeopleState
  )

  const removeItem = (id) => {
    // console.log(id)
    //const foundPl = people.filter((fpl) => fpl.id !== id)
    // console.log(foundPl)
    // setPeople(foundPl)
    peopleDispatcher({ type: REMOVE_PEOPLE, payload: { id } })
  }
  const clearItems = () => {
    //setPeople([])
    peopleDispatcher({ type: CLEAR_PEOPLE })
  }
  const resetItems = () => {
    //setPeople(data)
    peopleDispatcher({ type: RESET_PEOPLE })
  }
  // console.log(peopleState.people)
  return (
    <div>
      {peopleState.people.map((pl) => {
        const { id, name } = pl
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button
              className="btn"
              type="button"
              onClick={() => removeItem(id)}
            >
              Remove me
            </button>
          </div>
        )
      })}

      {peopleState.people.length < 1 ? (
        <button className="btn" type="button" onClick={resetItems}>
          Reset
        </button>
      ) : (
        <button className="btn" type="button" onClick={clearItems}>
          Remove All
        </button>
      )}
    </div>
  )
}

export default ArrayList
