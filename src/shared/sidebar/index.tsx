import { useGetCoursesQuery } from "../../features/api/coursesApi";
import ButtonAdd from "../components/buttons/buttonAdd";
import ButtonDelete from "../components/buttons/buttonDelete";
import "./index.scss";

export interface ISedebarProps {
  setSelectedIdCourse: (update: (prev: number[]) => number[]) => void;
}

function Sidebar({ setSelectedIdCourse }: ISedebarProps) {
  const { data: courses } = useGetCoursesQuery();

  const handleSelecttCourse = (id: number) => {
    setSelectedIdCourse((prev: number[]) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="sidebar">
      <ul>
        {courses?.map((course) => (
          <li key={course.id}>
            <span>{course.language}</span>
            <ButtonAdd
              id={course.id}
              onSelect={() => handleSelecttCourse(course.id)}
            />
            <ButtonDelete />
          </li>
        ))}
      </ul>
      {/* <ul>
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
      </ul> */}
    </div>
  );
}

export default Sidebar;
