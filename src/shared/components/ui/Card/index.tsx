import { SetStateAction, useState } from "react";
import "./index.scss";
import { ICardProps } from "./type";

function Card({
  title,
  description,
  instructor,
  duration,
  price,
  onDelete,
}: ICardProps) {
  const [isActiveToggle, setIsToggleActive] = useState<boolean>(false);
  const [switchDuration, setSwitchDuration] = useState<string>(duration);

  const numberCurrentMount = parseInt(switchDuration[0]);
  const priceForOneMount = Math.floor(price / parseInt(duration[0]));

  const handleSwitchDuration = () => {
    setIsToggleActive(!isActiveToggle);
  };

  const handleChangeDuration = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSwitchDuration(event.target.value);
  };

  return (
    <div className="card">
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <p>
        Преподаватель: <span>{instructor}</span>
      </p>
      <div className="container-change">
        <p>
          Длительность:
          <span className="price"> {numberCurrentMount}</span>
        </p>
        <p>
          Стоимость:
          <span> {numberCurrentMount * priceForOneMount}₽</span>
        </p>
      </div>
      {!isActiveToggle ? (
        <div className="toggle-chang">
          <img
            src="/card/editing.png"
            alt="editing"
            onClick={handleSwitchDuration}
          />
          <img src="/modal/delete.png" alt="delete" onClick={onDelete} />
        </div>
      ) : (
        <div className="toggle-change">
          <select value={switchDuration} onChange={handleChangeDuration}>
            <option value="1 месяц">1 месяц</option>
            <option value="2 месяца">2 месяца</option>
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
