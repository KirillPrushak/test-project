import { Outlet } from "react-router-dom";
import Footer from "../../shared/components/layout/Footer";
import Header from "../../shared/components/layout/Header";
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
