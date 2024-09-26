import Price from "./Price";

function Product({ idx }) {
  let title = ["A", "B", "C", "D"];
  let Product = {
    border: "1px solid black",
    borderRadius: "20px",
  };
  return (
    <div className="Product" style={Product}>
      <h4>{title[idx]}</h4>
      <p>Description</p>
      <Price />
    </div>
  );
}

export default Product;
