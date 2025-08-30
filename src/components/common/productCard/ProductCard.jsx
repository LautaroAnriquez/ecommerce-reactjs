import { Link } from "react-router";
import "./ProductCard.css";

const ProductCard = ({product}) => {
    const {title, description, price, id, imageUrl} = product;
  return (
    <div style={{border: "2px solid black", padding: "10px", margin:"10px", backgroundColor:"#19a2cc", color:"black"}}>
        <img src={imageUrl} alt="" />
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h2>${price}</h2>
        <Link to={`/detalle/${id}`}>Detalle</Link>
    </div>
  )
}

export default ProductCard