import { useState } from "react";
import "./index.scss";
import ButtonSend from "../buttons/ButtonSend";
export interface ICardProps {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
}

function Card({ title, description, instructor, duration, price }: ICardProps) {
  const [isActiveToggle, setIsToggleActive] = useState<boolean>(false);

  const handleSwitchDuration = () => {
    setIsToggleActive(!isActiveToggle);
  };

  return (
    <div className="card">
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <p>Преподаватель: {instructor}</p>
      <div className="container-change">
        <p>
          Длительность:
          <span> {duration}</span>
        </p>
        <p>
          Стоимость:
          <span> {price}</span>
        </p>
      </div>
      {!isActiveToggle ? (
        <div className="toggle-change">
          <img
            src="/card/editing.png"
            alt="editing"
            onClick={handleSwitchDuration}
          />
          <ButtonSend />
        </div>
      ) : (
        <div className="toggle-change">
          <select>
            <option value="3 месяца">3 месяца</option>
            <option value="4 месяца">4 месяца</option>
            <option value="5 месяцев">5 месяца</option>
          </select>
          <button onClick={handleSwitchDuration}>Сохранить</button>
        </div>
      )}
    </div>
  );
}

export default Card;
