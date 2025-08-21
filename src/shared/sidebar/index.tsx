import { useGetCoursesQuery } from "../../features/api/coursesApi";
import ButtonAdd from "../components/buttons/buttonAdd";
import ButtonDelete from "../components/buttons/buttonDelete";
import "./index.scss";

export interface ISedebarProps {
  setSelectedIdCourse: (update: (prev: number[]) => number[]) => void;
  isOpen: () => void;
}

function Sidebar({ setSelectedIdCourse, isOpen }: ISedebarProps) {
  const { data: courses } = useGetCoursesQuery();

  const handleAddCourse = (id: number) => {
    setSelectedIdCourse((prev: number[]) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
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
              isOpen={isOpen}
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
