import { CartWidget } from "../CartWidget/CartWidget"
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
        <h1>SneakersAR</h1>
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