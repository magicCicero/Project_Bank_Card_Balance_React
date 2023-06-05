import "./Header.css";

function Header() {
  return (
    <>
      <nav>
        <img className="search-icon" src="./search.png" alt="" />
        <img className="logo-icon" src="./n26_logo.png" alt="" />
        <img className="darkmode-icon" src="./dark-mode.png" alt="" />
      </nav>
    </>
  );
}

export default Header;
