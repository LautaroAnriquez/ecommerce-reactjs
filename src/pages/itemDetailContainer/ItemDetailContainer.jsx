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
        let productsCollection = collection (dataBase, "products")
        let refDoc = doc (productsCollection, id)
        getDoc (refDoc).then((res) => setProduct ({id: res.id, ...res.data()}))
    }, [id]);
        
    

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"30px"}}>
        <img src={product.imageUrl} alt="" style={{border:"solid 2px black"}}/>
        <h3 style={{margin:"5px"}}>{product.title}</h3>
        <h3 style={{margin:"5px"}}>${product.price}</h3>
        <Counter product={product}/>
    </div>
  );
};

export default ItemDetailContainer;