import {useContext, useState} from "react";
import {CartContext} from "../../../../context/CartContext";

const Counter = ({product}) => {
    const {addToCart} = useContext(CartContext);
    const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } 
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const agregarAlCarrito = () => {
    let productoConCantidad = { ...product, cantidad: contador };
    addToCart(productoConCantidad);
    alert ("producto agregado al carrito");
  };
  return (
    <div>
        <button onClick={restar} disabled={contador === 1}>-</button>
        <h3>{contador}</h3>
        <button onClick={sumar} disabled={contador === product.stock}>+</button>
        <button onClick={agregarAlCarrito}>Agregar ak carrito</button>
    </div>
  )
}

export default Counter