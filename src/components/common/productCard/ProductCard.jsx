import "./ProductCard.css";

const ProductCard = ({product}) => {
    const {title, description, price} = product;
  return (
    <div style={{border: "2px solid lightblue", padding: "10px", margin:"10px"}}>
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h2>{price}</h2>
    </div>
  )
}

export default ProductCard