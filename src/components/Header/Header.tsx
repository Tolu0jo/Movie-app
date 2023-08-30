import {Link} from "react-router-dom"
import tech from "../../images/tech.jpeg"
import "./header.scss"


const Header = () => {
  return (
<div className="header">
  <Link to="/">
  <div className="logo">Movie App</div>
  </Link>
   <div className="user-image">
   <img src={tech} alt="user" />  
   </div>
</div>
  )
}

export default Header;