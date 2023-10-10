import React from 'react'
import { useState } from 'react'

function Counter() {
  const [ctr, setCtr] = useState(0)

  const handleClick = () => {
    setCtr(ctr + 1)
  }

  return (
    <div>
      <h2>{ctr}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default Counter
