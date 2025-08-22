import "./index.scss";
import { useState } from "react";
import CoursesList from "./CoursesList";
import Modal from "../../shared/components/ui/Modal";
import Sidebar from "../../shared/components/layout/Sidebar";
import Reviews from "../../shared/components/ui/Reviews";

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
    <div className="courses">
      <Modal
        isOpen={isModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
      <div className="container-courses">
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
  );
}

export default CoursesPage;
