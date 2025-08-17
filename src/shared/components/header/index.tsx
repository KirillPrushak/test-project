import Description from "./description";
import Logo from "./logo";
import "./index.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Description />
      </div>
    </header>
  );
}

export default Header;
