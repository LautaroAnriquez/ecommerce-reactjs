import {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import {dataBase} from "../../firebase";
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";

const Checkout = () => {
    const [user, setUser] = useState({
        nombre:"",
        telefono:"",
        email:"",
    });

    const {cart, getTotalAmount, resetCart} = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const submit = (evento) => {
        evento.preventDefault();
        let total = getTotalAmount();
        let object = {
            buyer: user,
            items: cart,
            total: total,
        };
        let ordersCollection = collection (dataBase, "orders")
        let res = addDoc (ordersCollection, object)
        res.then((res) => {
            setOrderId(res.id)
            resetCart()
        }).catch ((error) => {alert ("Hubo un error al ralizar la compra. Vuelva a intentar");
        console.log (error);
        });
        let productsCollection = collection (dataBase, "products");
        object.items.forEach ((elemento) => {
            let productRef = doc (productsCollection, elemento.id);
            updateDoc (productRef, {stock:elemento.stock-elemento.cantidad});
        })
    };

    const change = (evento) => {setUser ({...user, [evento.target.name]: evento.target.value})};

  return (
    <div>
        <h1>Complete el formulario para finalizar la compra</h1>
        {orderId ? (
            <h2>Gracias por la compra. Su número de orden es: {orderId}</h2>
        ) : (
           <form onSubmit = {submit}>
            <input 
            type="text" 
            placeholder="Nombre"
            name="nombre" 
            onChange= {change} />
            <input 
            type="text" 
            placeholder="Teléfono" 
            name="telefono"
            onChange={change}/>
            <input 
            type="text" 
            placeholder="Email" 
            name="email"
            onChange={change}/>
            <button>Comprar</button>
        </form> 
        )}
    </div>
    )
}
        
    

export default Checkout