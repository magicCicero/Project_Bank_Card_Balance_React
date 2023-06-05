import "./CardData.css";

function CardData() {
  return (
    <>
      <section className="card">
        <div className="inner-card-data">
          <div className="card-numbers">
            <h1>N26</h1>
            <h2>5909 0393 0924 0000</h2>
            <div className="sec-data">
              <h2>01/19</h2>
              <h2>675</h2>
            </div>
          </div>
          <div className="pers-data">
            <h3>Alpay Cel</h3>
            <img src="./mastercard_logo.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default CardData;
