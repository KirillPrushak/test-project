import { useGetCoursesQuery } from "../../features/api/coursesApi";
import ButtonAdd from "../components/buttons/buttonAdd";
import ButtonDelete from "../components/buttons/buttonDelete";
import "./index.scss";

export interface ISedebarProps {
  setSelectedIdCourse: (update: (prev: number[]) => number[]) => void;
}

function Sidebar({ setSelectedIdCourse }: ISedebarProps) {
  const { data: courses } = useGetCoursesQuery();

  const handleAddCourse = (id: number) => {
    setSelectedIdCourse(
      (prev: number[]) => prev.filter((item) => item === id) && [...prev, id]
    );
  };

  const handleDeleteCourse = (id: number) => {
    setSelectedIdCourse((prev: number[]) => prev.filter((item) => item !== id));
  };

  return (
    <div className="sidebar">
      <ul>
        {courses?.map((course) => (
          <li key={course.id}>
            <span>{course.language}</span>
            <ButtonAdd
              id={course.id}
              onSelect={() => handleAddCourse(course.id)}
            />
            <ButtonDelete
              id={course.id}
              onSelect={() => handleDeleteCourse(course.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
