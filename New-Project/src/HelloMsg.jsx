function HelloMsg({userName, textColor}) {
    let styles = {color: textColor};
  return (
  <h3 style={styles}> hello, {userName}</h3>
  )
}

export default HelloMsg;