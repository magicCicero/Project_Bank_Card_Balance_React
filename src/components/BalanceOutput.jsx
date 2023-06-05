import React from "react";
import "./BalanceOutput.css";

function BalanceOutput(props) {
  const { currentBalance } = props;

  return (
    <div className="balance-output-container">
      <p className="balance-output">{currentBalance}€</p>
      <p className="current-balance-txt">CURRENT BALANCE</p>
    </div>
  );
}

export default BalanceOutput;
