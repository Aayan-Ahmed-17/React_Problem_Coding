import React from 'react'

const Child = ({sentdata}) => {

      function handleSentData(){
          sentdata(200)
      }
  return (
    <button onClick={handleSentData}>Updated Parent Income </button>
  )
}

export default Child