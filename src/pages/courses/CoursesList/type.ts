export interface ICoursesListProps {
  selectedIdCourse: number[];
  setSelectedIdCourse: (update: (prev: number[]) => number[]) => void;
  isOpen: (id: number) => void;
}
