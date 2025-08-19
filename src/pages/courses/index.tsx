import CoursesList from "../../shared/components/coursesList";
import Sidebar from "../../shared/sidebar";
import "./index.scss";
import Reviews from "../../shared/components/reviews/index";
import { useState } from "react";

function CoursesPage() {
  const [selectedIdCourse, setSelectedIdCourse] = useState<number[]>([]);

  return (
    <div className="data">
      <div className="sidebar-section">
        <Sidebar setSelectedIdCourse={setSelectedIdCourse} />
      </div>
      <div className="main-section">
        <CoursesList selectedIdCourse={selectedIdCourse} />
        <Reviews />
      </div>
    </div>
  );
}

export default CoursesPage;
