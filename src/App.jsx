import {BrowserRouter, Routes, Route} from "react-router";
import {ItemListContainer} from "./pages/itemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Navbar";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/notfound/NotFound";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";



function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:d" element={<ItemListContainer/>}/>
          <Route path="/carrito" element={<Cart/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );  
}        
      
export default App;