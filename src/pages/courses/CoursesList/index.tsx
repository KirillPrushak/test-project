import "./index.scss";
import { useGetCoursesQuery } from "../../../features/api/coursesApi";
import { useState } from "react";
import Card from "../../../shared/components/ui/Card";
import { ICoursesListProps } from "./type";

function CoursesList({ selectedIdCourse, isOpen }: ICoursesListProps) {
  const { data: courses, isLoading, error } = useGetCoursesQuery();
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);

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
      {selectedCourse && (
        <div className="container">
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
  );
}

export default CoursesList;
