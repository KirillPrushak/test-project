import "./index.scss";
export interface ICardProps {
  title: string;
  description: string;
}

function Card({ title, description }: ICardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src="/card/editing.png" alt="" />
    </div>
  );
}

export default Card;
