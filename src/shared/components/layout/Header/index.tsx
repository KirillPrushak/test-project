import Description from "../../ui/Description";
import Logo from "../../ui/Logo";

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
