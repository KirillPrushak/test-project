import { Outlet } from "react-router-dom";
import Header from "../../shared/components/header";
import Footer from "../../shared/components/footer";

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
