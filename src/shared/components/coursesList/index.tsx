import { useEffect, useState } from "react";
import Card from "../card";
import "./index.scss";
import { ICourses } from "../../api/courses";
import { useGetCoursesQuery } from "../../../features/api/coursesApi";

function CoursesList() {
  // const [courses, setCourses] = useState<ICourses[]>([]);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:6080/data");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setCourses(data.courses);
  //       console.log(data.courses);
  //     } catch (error) {
  //       console.log("Ошибка загрузки:", error);
  //     }
  //   };

  //   loadData();
  // }, []);

  const { data: courses, isLoading, error } = useGetCoursesQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;
  if (!courses?.length) return <div>Курсы не найдены</div>;

  return (
    <div className="list">
      <div className="container">
        {courses.map((course) => (
          <Card title={course.title} description={course.description} />
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
