import Card from "../../shared/components/card";
import Sidebar from "../../shared/sidebar";
import "./index.scss";

function DataPage() {
  return (
    <div className="data">
      <div className="sidebar-section">
        <Sidebar />
      </div>
      <div className="main-section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default DataPage;
