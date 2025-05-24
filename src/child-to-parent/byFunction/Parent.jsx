import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
      const [number, setNumber] = useState(500)

      function updateNumByChild(updatedNum){
            setNumber(updatedNum)
      }
  return (
      <>
      <p>Parent Income: {number}</p>
    <Child sentdata={updateNumByChild}/>
      </>
  )
}

export default Parent