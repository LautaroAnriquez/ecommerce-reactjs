import ItemListContainer from "./components/itemListContainer/itemListContainer";
import { Navbar } from "./components/Navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting = "Bienvenidos a SneakersAR, la mejor tienda de zapatillas del país"/>
    </div>
  );
}

export default App;
