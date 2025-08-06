import { CartWidget } from "../CartWidget/CartWidget"
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
        <img src="https://res.cloudinary.com/dtl2ucf3y/image/upload/v1754499949/logo-proyecto_aykkxu.png" alt="" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#quienes somos">Quienes Somos</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar