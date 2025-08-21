import CoursesList from "../../shared/components/coursesList";
import Sidebar from "../../shared/sidebar";
import "./index.scss";
import Reviews from "../../shared/components/reviews/index";
import { useState } from "react";
import Modal from "../../shared/components/Modal";
import { CourseProvider } from "../../shared/context";

function CoursesPage() {
  const [selectedIdCourse, setSelectedIdCourse] = useState<number[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setCourseToDelete(id);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setCourseToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (courseToDelete) {
      setSelectedIdCourse((prev: number[]) =>
        prev.filter((item) => item !== courseToDelete)
      );
      handleCloseModal();
    }
  };

  return (
    <CourseProvider>
      <div className="data">
        <Modal
          isOpen={isModal}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
        <div className="container">
          <div className="sidebar-section">
            <Sidebar
              setSelectedIdCourse={setSelectedIdCourse}
              isOpen={() => handleOpenModal(0)}
            />
          </div>
          <div className="main-section">
            <CoursesList
              selectedIdCourse={selectedIdCourse}
              setSelectedIdCourse={setSelectedIdCourse}
              isOpen={(id) => handleOpenModal(id)}
            />
            <Reviews />
          </div>
        </div>
      </div>
    </CourseProvider>
  );
}

export default CoursesPage;
