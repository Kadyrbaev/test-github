import React from 'react'
import "./Header.css"

export const userName = "NURLES"
export function fun(a){
  return a+a
}

const Header = (props) => {
    console.log(props);
    const week = 3
    let a = ""
    if(week ===1){
       a = "ponedelnik"
    }else if(week===2){
      a = "vtornik"
    }else if(week===3){
      a="sreda"
    }

  return (
    <header className='header'>
      <h1>LOGO</h1>
      <button>Contact</button>
      <button>Phone</button>
      <button onClick={props.onShowForm}>LOGIN</button>

      <h1>{a}</h1>
    </header>
  )
}

export default Header
