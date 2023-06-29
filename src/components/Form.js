import React, { useState } from 'react'
import "./Header.css"

const Form = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  


  const [state, setState] = useState(null)
  console.log(state);
  function emailValue(e){
    setEmail(e.target.value)
    if(e.target.value.length < 5){
      setState(false)
    }else if(e.target.value.length > 5){
      setState(true)
    }
    
  }


  function passwordValue(e){
    setPassword(e.target.value)
  }
  function nameValue(e){
    setName(e.target.value)
  }



  function clickHandler(e){
    e.preventDefault()
    const obj = {
      name: name,
      pass: password,
      email: email
    }
    props.onGetText(obj)
  }


  return (
    <form>
      <label htmlFor="">Email</label>
      <input onChange={emailValue} type="text" />
      <label htmlFor="">Password</label>
      <input onChange={passwordValue} type="password" />
      <label htmlFor="">Name</label>
      <input onChange={nameValue} type="text" />
      <button onClick={clickHandler}>ADD</button>
    </form>
  )
}

export default Form

