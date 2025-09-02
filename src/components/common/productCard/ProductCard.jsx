import { Link } from "react-router";
import "./ProductCard.css";

const ProductCard = ({product}) => {
    const {title, price, id, imageUrl} = product;
  return (
    <div style={{
        border: "2px solid black", 
        padding: "70px",
        margin:"20px", 
        marginTop:"90px", 
        backgroundColor:"#19a2cc", 
        color:"black"}}>
        <img src={imageUrl} alt="" style={{width:"200px", border:"solid 2px black"}}/>
        <h2 style={{margin:"10px"}}>{title}</h2>
        <h2 style={{marginBottom:"15px"}}>${price}</h2>
        <Link to={`/detalle/${id}`} style={{
        padding: "10px 20px", 
        backgroundColor: "black", 
        color: "#19a2cc", 
        fontSize:"15px",
        textDecoration:"none"
         }}>Detalle</Link>
    </div>
  )
}

export default ProductCard