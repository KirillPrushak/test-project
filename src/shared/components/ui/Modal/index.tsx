import "./index.scss";
import { IModalProps } from "./type";
import useTimer from "../../../../hooks";

function Modal({ isOpen, onClose, onConfirm }: IModalProps) {
  const { timer } = useTimer(5, isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="timer-comtainer">
        <h1>{timer}</h1>
      </div>
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
