import Product from "./Product";
import "./product.css";

function ProductTab() {
  let productTab = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  return (
    <div style={productTab}>
      <Product idx={0} />
      <Product idx={1} />
      <Product idx={2} />
      <Product idx={3} />
    </div>
  );
}

export default ProductTab;
