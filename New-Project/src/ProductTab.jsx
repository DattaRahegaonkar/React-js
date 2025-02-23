import Product from "./Product";

function ProductTab() {
  let styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product Name="MX Mouse" idx={0}/>
      <Product Name="Apple Pencil" idx={1}/>
      <Product Name="Zebronics" idx={2}/>
      <Product Name="Pentronics" idx={3}/>
    </div>
  );
}

export default ProductTab;
