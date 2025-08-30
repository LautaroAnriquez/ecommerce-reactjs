import {useEffect, useState, } from "react";
//import {productsMock} from "../../productsMock";
import {useParams} from "react-router";
import {CartContext} from "../../context/CartContext";
import Counter from "../../components/common/productCard/counter/Counter"
import { collection, getDoc, doc } from "firebase/firestore";
import {dataBase} from "../../firebase";

const ItemDetailContainer = () => {
    const {id} = useParams();
    
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        //const element=productsMock.find((producto) => producto.id === id);
        let productsCollection = collection (dataBase, "products")
        let refDoc = doc (productsCollection, id)
        getDoc (refDoc).then((res) => setProduct ({id: res.id, ...res.data()}))
        //setProduct(element);
    }, [id]);
        
    

  return (
    <div>
        <h3>{product.title}</h3>
        <h3>{product.desciption}</h3>
        <h3>{product.price}</h3>
        <Counter product={product}/>
    </div>
  );
};

export default ItemDetailContainer;