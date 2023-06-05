import "./App.css";
import CardData from "./components/CardData";
import Header from "./components/Header";
import BalanceSection from "./components/BalanceSection";

function App() {
  return (
    <>
      <header>
        <Header />
        <CardData />
      </header>
      <main>
        <BalanceSection />
      </main>
    </>
  );
}

export default App;
