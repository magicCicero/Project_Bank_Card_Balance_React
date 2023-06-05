import React, { useState } from "react";
import BalanceOutput from "./BalanceOutput";
import BalanceInput from "./BalanceInput";
import "./BalanceSection.css";

function BalanceSection() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [insertedNum, setInsertedNum] = useState(0);

  const addValue = () => {
    setCurrentBalance(currentBalance + insertedNum);
    setInsertedNum(0);
  };

  const minusValue = () => {
    setCurrentBalance(currentBalance - insertedNum);
    setInsertedNum(0);
  };

  return (
    <>
      <section className="balance-container">
        <BalanceOutput currentBalance={currentBalance} />
        <BalanceInput
          insertedNum={insertedNum}
          setInsertedNum={setInsertedNum}
          addValue={addValue}
          minusValue={minusValue}
        />
      </section>
    </>
  );
}

export default BalanceSection;
