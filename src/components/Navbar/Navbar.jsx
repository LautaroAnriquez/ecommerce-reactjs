import { CartWidget } from "../CartWidget/CartWidget";
import './Navbar.css';
import {Link} from "react-router";

export const Navbar = () => {
  return (
    <div>
        
        <ul>
          <Link to="/"><img src="https://res.cloudinary.com/dtl2ucf3y/image/upload/v1754499949/logo-proyecto_aykkxu.png" alt="" /></Link>
          <Link to="/category/urban"><li>Urban</li></Link>
          <Link to="/category/deportiva"><li>Deportivas</li></Link>
          <Link to="/carrito"><CartWidget/></Link>
        </ul>
        
    </div>
  )
}

export default Navbar