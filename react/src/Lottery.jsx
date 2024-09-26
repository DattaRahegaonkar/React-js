import { useState } from "react";
import { genrateTicket, sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) {
  const [ticket, setticket] = useState(genrateTicket(n));
  let BuyTicket = () => {
    setticket(genrateTicket(n));
  };
  let iswin = winCondition(ticket);
  let styles = {
    backgroundColor: "pink",
    margin: "0 100px 0 100px",
    padding: "10px 0 10px 0",
    borderRadius: "15px",
    border: "1px solid black",
  };
  return (
    <div>
      <h1>Lottery Ticket</h1>
      <hr />
      <br />
      <h3>{iswin && "Congrats, You Won !"}</h3>
      <div onClick={genrateTicket} style={styles}>
        <Ticket ticket={ticket} />
      </div>
      <br />
      <button onClick={BuyTicket}>Buy New Ticket</button>
    </div>
  );
}
