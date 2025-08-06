import {useEffect, useState} from "react";
import {productsMock} from "../../productsMock";
import ProductCard from "../../components/common/productCard/ProductCard";

export const ItemListContainer = () => {
    
    const [items, setItems] = useState([]);

    useEffect (() => {
        const getProducts = new Promise ((resolve) => {
            resolve  (productsMock);
        });
        getProducts.then((res) => setItems(res));
    }, []);
    
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