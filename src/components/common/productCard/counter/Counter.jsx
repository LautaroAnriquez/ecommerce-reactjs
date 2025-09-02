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
    alert ("Producto agregado al carrito");
  };
  
  return (
    <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
        <button onClick={restar} disabled={contador === 1} style={{backgroundColor: "#19a2cc", color:"black", border:"none", padding:"10px", cursor:"pointer", fontWeight:"bold"}}>-</button>
        <h3 style={{fontWeight:"bold"}}>{contador}</h3>
        <button onClick={sumar} disabled={contador === product.stock} style={{backgroundColor: "#19a2cc", color:"black", border:"none", padding:"10px", cursor:"pointer", fontWeight:"bold"}}>+</button>
        <button onClick={agregarAlCarrito} style={{backgroundColor: "#19a2cc", color:"black", border:"none", padding:"10px", cursor:"pointer", fontWeight:"bold"}}>Agregar al carrito</button>
    </div>
  )
}

export default Counter