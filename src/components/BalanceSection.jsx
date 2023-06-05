import "./BalanceSection.css";
import InputFields from "./InputFields";

function BalanceSection() {
  return (
    <>
      <section className="balance-container">
        <div className="balance-output-container">
          <p className="balance-output">100€</p>
          <p className="current-balance-txt">CURRENT BALANCE</p>
        </div>
        <InputFields />
      </section>
    </>
  );
}

export default BalanceSection;
