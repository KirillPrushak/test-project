import { ICourses } from "../../../api/courses";
import "./index.scss";

export interface IButtonAddProps {
  id: any;
  onSelect: (id: [number] | null) => void;
}

function ButtonAdd({ id, onSelect }: IButtonAddProps) {
  const handleAddCourses = async (id: [number] | null | Partial<ICourses>) => {
    console.log("Add course", id);
  };

  return (
    <div className="button-add">
      {/* {courses?.map((course) => ( */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="plus-icon"
        onClick={() => onSelect(id)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      {/* ))} */}
    </div>
  );
}

export default ButtonAdd;
