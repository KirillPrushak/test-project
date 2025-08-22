import { useGetCoursesQuery } from "../../../../features/api/coursesApi";
import ButtonAdd from "../../ui/Buttons/ButtonAdd";
import ButtonDelete from "../../ui/Buttons/ButtonDelete";
import "./index.scss";
import { ISedebarProps } from "./type";

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
            <div className="sidebar-btns">
              <ButtonAdd
                id={course.id}
                onSelect={() => handleAddCourse(course.id)}
              />
              <ButtonDelete
                isOpen={isOpen}
                id={course.id}
                onSelect={() => handleDeleteCourse(course.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
