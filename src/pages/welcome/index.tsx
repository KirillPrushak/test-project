import ButtonCourses from "../../shared/components/ui/Buttons/ButtonCourses";
import "./index.scss";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcom-container">
        <h1>Добро пожаловать на платформу для обучения!</h1>
        <div className="main-text">
          <h3>
            Здесь вас ждут актуальные курсы от экспертов, гибкий график занятий
            и практические знания для карьеры и жизни. Выбирайте направление,
            учитесь в удобном темпе и достигайте новых высот вместе с нами.
            Начните свой образовательный путь прямо сейчас!
          </h3>
          <div className="details">
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
