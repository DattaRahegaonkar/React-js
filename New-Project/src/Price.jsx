function Price({oldPrice, newPrice, idx}) {

    let oldStyle = {
        textDecoration: "line-through"
    }

    let newStyle = {
        fontWeight: "bold"
    }

    let styles = {
        backgroundColor: "pink",
        padding: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
    }
  return (
    <div style={styles}>
    <span style={oldStyle}>{oldPrice[idx]}</span>
    &nbsp; &nbsp;
    <span style={newStyle}>{newPrice[idx]}</span>
    </div>
  )
}

export default Price;