import {CartContext} from "../../context/CartContext";
import React, {useContext} from "react";
import {Link} from "react-router";


const Cart = () => {
  const {cart,resetCart,removeById,getTotalAmount} = useContext (CartContext)
  let total = getTotalAmount();
  return (
    <div>
        <h1>Tu carrito</h1>
        {
          cart.map ((producto) => {
            return (
              <div key={producto.id}>
                <img src={producto.imageUrl} alt="" />
                <h2>{producto.title}</h2>
                <h2>${producto.price}</h2>
                <h2>x{producto.cantidad}</h2>
                <button onClick={()=>removeById(producto.id)}>Eliminar del carrito</button>
              </div>
            );
          })
        }
        <h3>Total : ${total}</h3>
        <button onClick={resetCart}>Vaciar carrito</button>
        <Link to = "/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Cart