import { Outlet } from "react-router-dom";
import Header from "../../shared/components/header";
import Footer from "../../shared/components/footer";
import "./index.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
