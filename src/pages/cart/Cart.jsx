import {CartContext} from "../../context/CartContext";
import React, {useContext} from "react";
import {Link} from "react-router";


const Cart = () => {
  const {cart,resetCart,removeById,getTotalAmount} = useContext (CartContext)
  let total = getTotalAmount();
  
  return (
    <div style={{margin:"10px"}}>
        <h1>Tu carrito</h1>
        {
          cart.map ((producto) => {
            return (
              <div key={producto.id} style= {{display: "flex", gap: "24px", border: "1px solid black", alignItems:"center", marginBottom:"1px"}}>
                <img src={producto.imageUrl} alt="" style={{width:"100px"}}/>
                <h2>{producto.title}</h2>
                <h2>${producto.price}</h2>
                <h2>x{producto.cantidad}</h2>
                <button onClick={()=>removeById(producto.id)} style={{backgroundColor: "#19a2cc", color:"black", border:"none", padding:"10px", cursor:"pointer", fontWeight:"bold"}}>Eliminar del carrito</button>
                <button onClick={resetCart} style={{backgroundColor: "#19a2cc", color:"black", border:"none", padding:"10px", cursor:"pointer", fontWeight:"bold"}}>Vaciar carrito</button>
              </div>
            );
          })
        }
        <div style={{display:"flex", alignItems:"center", gap:"50px"}}>
          <h3 style={{fontSize:"30px"}}>Total: ${total}</h3>
          {cart.length >= 1 && <Link to = "/checkout" style={{backgroundColor: "#19a2cc", color:"black", border:"none", padding:"20px", cursor:"pointer", fontWeight:"bold", margin:"20px", textDecoration:"none", textAlign:"center"}}>Finalizar compra</Link>} 
        </div>
    </div>     
  )
}      

       
    
  

export default Cart