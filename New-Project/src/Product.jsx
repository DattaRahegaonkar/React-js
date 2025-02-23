import Price from "./Price";

function Product({ Name , idx }) {
    let styles = {
        border: "1px solid black",
        borderRadius: "10px",
        margin: "5px",
        // padding: "10px"
    }

    let features = ["800 DPI", "intuitive surface", "for iPad pro", "wireless"]
    let oldPrice = ["12000", "9000", "400", "900"]
    let newPrice = ["10000", "8500", "300", "750"]

  return (
    <div style={styles}>
      <h3>{Name}</h3>
      <p>{features[idx]}</p>
      <Price oldPrice={oldPrice} newPrice={newPrice} idx={idx}/>
    </div>
  );
}

export default Product;
