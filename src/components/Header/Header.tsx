import {Link} from "react-router-dom"
import tech from "../../images/tech.jpeg"
import "./header.scss"
import { useState } from "react"


const Header = () => {
  const[term,setTerms]=useState("")

  const handleSubmit =(e: { preventDefault: () => void })=>{
  e.preventDefault();
  
  console.log(term)
  setTerms("")
  }
  return (
<div className="header">

  <div className="logo">  <Link to="/">Movie App  </Link></div>
  <form onSubmit={handleSubmit}>
    <input type="text" value={term} placeholder="Search..." onChange={(e)=>setTerms(e.target.value)}/>
    <button type="submit"><i className="fa fa-search"></i></button>
  </form>
   <div className="user-image">
   <img src={tech} alt="user" />  
   </div>
</div>
  )
}

export default Header;