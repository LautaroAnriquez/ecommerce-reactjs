import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState ([]);
    const addToCart = (producto) => {setCart([...cart, producto])};
    const removeById = (id) => {
        let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
        setCart(arrayFiltrado);
    };

    const resetCart = () => {
        setCart([]);
    };
    
    const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc+elemento.price*elemento.cantidad;
    }, 0);
    return total;
    };
    
    const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };

  return <CartContext.Provider
    value={{
        cart,
        addToCart,
        removeById,
        resetCart,
        getTotalAmount,
        getTotalQuantity,
    }}>
    {children}
  </CartContext.Provider>
};

export default CartContextProvider;