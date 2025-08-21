export interface ISedebarProps {
  setSelectedIdCourse: (update: (prev: number[]) => number[]) => void;
  isOpen: () => void;
}
