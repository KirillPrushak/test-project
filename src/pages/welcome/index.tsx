import ButtonCourses from "../../shared/components/ui/Buttons/ButtonCourses";
import "./index.scss";

function WelcomePage() {
  return (
    <div className="welcom">
      <div className="container">
        <div className="platform">
          <h2>Добро пожаловать на платформу для обучения!</h2>
        </div>
        <div className="description">
          <p>
            Здесь вас ждут актуальные курсы от экспертов, гибкий график занятий
            и практические знания для карьеры и жизни. Выбирайте направление,
            учитесь в удобном темпе и достигайте новых высот вместе с нами.
            Начните свой образовательный путь прямо сейчас!
          </p>
          <div>
            <p>Документ об окончании - Диплом</p>
            <p>Сложность - начальная</p>
            <p>Длительность - 5 месяцев</p>
          </div>
        </div>
        <ButtonCourses />
      </div>
    </div>
  );
}

export default WelcomePage;
