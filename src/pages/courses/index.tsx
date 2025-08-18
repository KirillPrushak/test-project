import CoursesList from "../../shared/components/coursesList";
import Sidebar from "../../shared/sidebar";
import "./index.scss";
import Reviews from "../../shared/components/reviews/index";

function CoursesPage() {
  return (
    <div className="data">
      <div className="sidebar-section">
        <Sidebar />
      </div>
      <div className="main-section">
        <CoursesList />
        <Reviews />
      </div>
    </div>
  );
}

export default CoursesPage;
