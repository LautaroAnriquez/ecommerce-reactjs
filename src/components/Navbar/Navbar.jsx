import { CartWidget } from "../CartWidget/CartWidget";
import './Navbar.css';
import {Link} from "react-router";

export const Navbar = () => {
  return (
    <div className="container">
        
        <ul className="navbar">
          <Link to="/" className="brandLogo"><img src="https://res.cloudinary.com/dtl2ucf3y/image/upload/v1754499949/logo-proyecto_aykkxu.png" alt="" className="brandLogo"/></Link>
          <Link to="/category/urban"><li>Urban</li></Link>
          <Link to="/category/deportiva"><li>Deportivas</li></Link>
          <Link to="/carrito" className="cart"><CartWidget/></Link>
        </ul>
        
    </div>
  )
}

export default Navbar