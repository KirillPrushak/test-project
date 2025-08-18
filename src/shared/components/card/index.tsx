import "./index.scss";

export interface ICardProps {
  title: string;
  description: string;
}

function Card({ title, description }: ICardProps) {
  return (
    <div className="card">
      {/* <img src="" alt="" /> */}
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Учиться</button>
    </div>
  );
}

export default Card;
