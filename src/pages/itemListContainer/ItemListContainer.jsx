import {useEffect, useState} from "react";
//import {productsMock} from "../../productsMock";
import ProductCard from "../../components/common/productCard/ProductCard";
import { useParams } from "react-router";
import {dataBase} from "../../firebase";
import {collection, getDocs, query, where} from "firebase/firestore";

export const ItemListContainer = () => {
    
    const [items, setItems] = useState([]);

    const {d} = useParams();

    useEffect (() => {
        let productsCollection = collection (dataBase, "products");
        let consult = productsCollection
        if (d) {
          let filter = query (productsCollection, where ("category", "==", d));
          consult = filter
        }
        
        let getProducts = getDocs (consult);
        getProducts.then((res) => {
            let array = res.docs.map((elemento)=>{
                return {id: elemento.id, ...elemento.data()}
            })
            setItems (array)
        });
    }, [d]);

    return (
        <div>
            <div style={{display: "flex", gap: "10px", justifyContent: "center", textAlign: "center"}}>
                {items.map((product) => {
                return <ProductCard key={product.id} product={product} />;
                })} 
            </div>
        </div>
    );
};

export default ItemListContainer