// import { useCourseContext } from "../../context";
import "./index.scss";
import { IModalProps } from "./type";

function Modal({ isOpen, onClose, onConfirm }: IModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-container">
        <img src="/modal/delete.png" alt="delete" />
        <h2>Удалить выбранный курс?</h2>
      </div>
      <div className="modal-actions">
        <button onClick={onConfirm}>Удалить</button>
        <button onClick={onClose}>Отменить</button>
      </div>
    </div>
  );
}

export default Modal;
