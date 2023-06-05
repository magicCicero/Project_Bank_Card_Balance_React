import React from "react";
import "./BalanceInput.css";

function BalanceInput(props) {
  const { insertedNum, setInsertedNum, addValue, minusValue } = props;

  const userInput = (e) => {
    setInsertedNum(Number(e.target.value));
  };

  return (
    <section className="input-container">
      <input
        value={insertedNum}
        className="input"
        placeholder="Gib einen Geldbetrag ein"
        type="text"
        onChange={userInput}
      />
      <button onClick={addValue} type="button">
        Einzahlen
      </button>
      <button onClick={minusValue} type="button">
        Auszahlen
      </button>
    </section>
  );
}

export default BalanceInput;
