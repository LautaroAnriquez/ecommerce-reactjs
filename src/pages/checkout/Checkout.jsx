import {useState} from 'react';

const Checkout = () => {
    const [user, setUser] = useState({
        nombre:"",
        telefono:"",
        email:"",
    });
    
    const submit = (evento) => {
        evento.preventDefault();
    };

    const change = (evento) => {setUser ({...user, [evento.target.name]: evento.target.value})};

  return (
    <div>
        <h1>Complete el formulario para finalizar la compra</h1>

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
            name="telefono"
            onChange={change}/>
            <button>Comprar</button>
        </form>
    </div>
  )
}

export default Checkout