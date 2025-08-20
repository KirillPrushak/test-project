import { SetStateAction, useState } from "react";
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
  const [switchDuration, setSwitchDuration] = useState<string>(duration);
  const [switchPrice, setSwitchPrice] = useState<number>(price);

  // const numberMount = switchDuration.match(/\d+/);
  const numberCurrentMount = parseInt(switchDuration[0]);
  const currentPriceForOneMount = price / numberCurrentMount;
  const currentPriceForSelectMount =
    currentPriceForOneMount * numberCurrentMount;

  console.log(switchDuration[0]);
  console.log(currentPriceForOneMount);

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
          <span> {numberCurrentMount * (price / parseInt(duration[0]))}₽</span>
        </p>
      </div>
      {!isActiveToggle ? (
        <div className="toggle-change">
          <img
            src="/card/editing.png"
            alt="editing"
            onClick={handleSwitchDuration}
          />
          {/* <ButtonSend /> */}
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
