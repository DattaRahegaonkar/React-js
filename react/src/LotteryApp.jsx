import Lottery from "./Lottery";
import { sum } from "./Helper";

function LotteryApp() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default LotteryApp;
