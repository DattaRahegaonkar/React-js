export default function Price() {
  let styles = {
    backgroundColor: "yellow",
    padding: "10px 40px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  };
  let oldstyle = {
    textDecorationLine: "line-through",
  };
  return (
    <div style={styles}>
      <span style={oldstyle}>2232</span>
      &nbsp; &nbsp;
      <span>232</span>
    </div>
  );
}
