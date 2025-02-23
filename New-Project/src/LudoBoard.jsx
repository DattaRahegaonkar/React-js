import { useState } from "react";

export default function LudoBoard() {

    let [Moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    let BlueMove = () => {
        setMoves({...Moves, blue: Moves.blue+1})
    }
    let YellowMove = () => {
        setMoves({...Moves, yellow: Moves.yellow+1})
    }
    let GreenMove = () => {
        setMoves({...Moves, green: Moves.green+1})
    }
    let RedMove = () => {
        setMoves({...Moves, red: Moves.red+1})
    }

  return (
    <>
      <h3>Game Begins !</h3>
      <p>Blue Moves = {Moves.blue}</p>
      <button onClick={BlueMove} style={{backgroundColor: "blue"}}>+1</button>

      <p>Yellow Moves = {Moves.yellow}</p>
      <button onClick={YellowMove} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
      <p>Green Moves = {Moves.green}</p>
      <button onClick={GreenMove} style={{backgroundColor: "green"}}>+1</button>
      <p>Red Moves = {Moves.red}</p>
      <button onClick={RedMove} style={{backgroundColor: "red"}}>+1</button>
    </>
  );
}
