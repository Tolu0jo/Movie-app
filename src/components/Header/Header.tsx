import {Link} from "react-router-dom"
import tech from "../../images/tech.jpeg"
import "./header.scss"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../features/store"
import { fetchMoviesAsync, fetchShowsAsync } from "../../features/movies/apiCall"


const Header = () => {
  const[term,setTerms]=useState("")
  const dispatch =useDispatch<AppDispatch>( )
  const handleSubmit =(e: { preventDefault: () => void })=>{
  e.preventDefault();
  if(term==="") return alert("Please enter a search")
  dispatch(fetchMoviesAsync(term))
  dispatch(fetchShowsAsync(term))
  setTerms("")
  }
  return (
<div className="header">

  <div className="logo">  <Link to="/">Movie App  </Link></div>
  <div className="search-bar">
  <form onSubmit={handleSubmit}>
    <input type="text" value={term} placeholder="Search..." onChange={(e)=>setTerms(e.target.value)}/>
    <button type="submit"><i className="fa fa-search"></i></button>
  </form>
  </div>
   <div className="user-image">
   <img src={tech} alt="user" />  
   </div>
</div>
  )
}

export default Header;