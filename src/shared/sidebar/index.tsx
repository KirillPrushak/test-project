import ButtonAdd from "../components/buttons/buttonAdd";
import ButtonDelete from "../components/buttons/buttonDelete";
import "./index.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <span>Photoshop</span>
          <ButtonAdd />
          <ButtonDelete />
        </li>
        <li>
          <span>AfterEffect</span>
          <ButtonAdd />
          <ButtonDelete />
        </li>
        <li>
          <span>Frontend</span>
          <ButtonAdd />
          <ButtonDelete />
        </li>
        <li>
          <span>Backend</span>
          <ButtonAdd />
          <ButtonDelete />
        </li>
        <li>
          <span>Gamedev</span>
          <ButtonAdd />
          <ButtonDelete />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
