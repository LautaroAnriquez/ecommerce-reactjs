import { Link } from "react-router";
import "./ProductCard.css";

const ProductCard = ({product}) => {
    const {title, price, id, imageUrl} = product;
  return (
    <div style={{border: "2px solid black", padding: "70px", margin:"20px", marginTop:"90px", backgroundColor:"#19a2cc", color:"black"}}>
        <img src={imageUrl} alt="" />
        <h2>{title}</h2>
        <h2>${price}</h2>
        <Link to={`/detalle/${id}`}>Detalle</Link>
    </div>
  )
}

export default ProductCard