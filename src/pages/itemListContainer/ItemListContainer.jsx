import {useEffect, useState} from "react";
import {productsMock} from "../../productsMock";
import ProductCard from "../../components/common/productCard/ProductCard";
import { useParams } from "react-router";

export const ItemListContainer = () => {
    
    const [items, setItems] = useState([]);
    const {d} = useParams();
    useEffect (() => {
        const productsFiltered = productsMock.filter(producto => producto.category === d);
        const getProducts = new Promise ((resolve) => {
            resolve  (d ? productsFiltered : productsMock);
        });
        getProducts.then((res) => setItems(res));
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