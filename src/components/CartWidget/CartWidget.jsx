import { FaCartShopping } from "react-icons/fa6";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext"

export const CartWidget = () => {
  const {getTotalQuantity} = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    
        <div style={{position: "relative", display : "inline-block", color:"black", padding:"5px"}}>
        <FaCartShopping size={35}/>
          <div
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "#585757ff",
              color: "white",
              borderRadius: "50%",
              minWidth: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "bold",
              padding: "0 4px",
              margin: "8px"
            }}
          >
            {total}
          </div>
        </div>
     
    )
}     
      
    
    


export default CartWidget