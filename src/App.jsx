import {BrowserRouter, Routes, Route} from "react-router";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/notfound/NotFound"
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:d" element={<ItemListContainer/>}/>
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
