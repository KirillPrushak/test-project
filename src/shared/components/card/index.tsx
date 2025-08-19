import "./index.scss";
export interface ICardProps {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
}

function Card({ title, description, instructor, duration, price }: ICardProps) {
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
      <img src="/card/editing.png" alt="" />
    </div>
  );
}

export default Card;
