import "./index.scss";
import { useGetCoursesQuery } from "../../../features/api/coursesApi";
import { useState } from "react";
import Card from "../../../shared/components/ui/Card";
import { ICoursesListProps } from "./type";

function CoursesList({ selectedIdCourse, isOpen }: ICoursesListProps) {
  const { data: courses, isLoading, error } = useGetCoursesQuery();
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);

  console.log(courseToDelete);

  const handleOpenModal = (id: number) => {
    setCourseToDelete(id);
    isOpen(id);
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;
  if (!courses?.length) return <div>Курсы не найдены</div>;

  const selectedCourse = courses?.filter((course) =>
    selectedIdCourse.includes(course.id)
  );

  return (
    <div className="list">
      <div className="list-description">
        <h1>Выбранные курсы</h1>
      </div>
      <div className="wrapper">
        {selectedCourse && (
          <div className="list-container">
            {selectedCourse.map((course) => (
              <Card
                key={course.id}
                {...course}
                onDelete={() => handleOpenModal(course.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CoursesList;
