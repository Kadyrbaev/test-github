import React from 'react'

const Foma = (props) => {
    const saveDataHandler=()=>{
        const obj ={
            value: "TEST",
            age: "ERTYU"
        }
        props.onData(obj)
    }
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button onClick={saveDataHandler}>ADD</button>
    </div>
  )
}

export default Foma
