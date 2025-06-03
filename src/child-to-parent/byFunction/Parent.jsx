import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
      const [number, setNumber] = useState(500)

      function updateNumByChild(updatedNum){
            setNumber(number + updatedNum)
      }
  return (
      <>
      <h1>Data from child to parent through function</h1>
      <p>Parent Income: {number}</p>
    <Child sentdata={updateNumByChild}/>
      </>
  )
}

export default Parent