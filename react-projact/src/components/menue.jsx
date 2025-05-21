
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import MyContex from "../contex"
export const Menue = () => {
  const currentCustomer = useContext(MyContex).currentCustomer
  const concat = useContext(MyContex).concat
  const setconcat=useContext(MyContex).setconcat
  const setcurrentCustomer=useContext(MyContex).setcurrentCustomer

  function f1(){
    setconcat(false)
    setcurrentCustomer("")
  }
  return <ul className="nav nav-tabs">

    <li className="nav-item">
      <NavLink className="nav-link" to={'home'}>בית</NavLink>
    </li>
    {!concat && <>
      <li className="nav-item">
        <NavLink className="nav-link" to={'login'}>התחברות</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to={'rishum'}>רישום</NavLink>
    </li>
      </>}
    
    <li className="nav-item">
      <NavLink className="nav-link" to={'cart'}> סל קניות</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to={'end'}>סיום קניה</NavLink>
    </li>
    {concat && <li className="nav-item">
      <NavLink className="nav-link" to={'private'}>איזור אישי</NavLink>
    </li>}

    {currentCustomer.name === 'מנהל' && <>
      <li className="nav-item">
        <NavLink className="nav-link" to={'categories'}>קטגוריות</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'games'}>משחקים</NavLink>
      </li>
    </>}
    <li className="nav-item user-info">
      <nav className="nav-link" >{currentCustomer.name}</nav>
    </li>
    <li className="nav-item user-info">
     <button onClick={()=>f1()}>התנתקות</button>
    </li>

  </ul >
  
}