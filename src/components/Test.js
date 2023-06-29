import React from 'react'

const Test = (props) => {
    console.log(props);
  return (
    <div>
      <h1>TEST</h1>
      {props.children}


   
      <h1>Hello-2</h1>
    </div>
  )
}

export default Test
