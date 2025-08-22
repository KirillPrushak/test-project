import ButtonCourses from "../../shared/components/ui/Buttons/ButtonCourses";
import "./index.scss";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcom-container">
        <div className="welcome">
          <h1>Добро пожаловать на платформу для обучения!</h1>
        </div>
        <div className="main-text">
          <h3>
            Здесь вас ждут актуальные курсы от экспертов, гибкий график занятий
            и практические знания для карьеры и жизни. Выбирайте направление,
            учитесь в удобном темпе и достигайте новых высот вместе с нами.
            Начните свой образовательный путь прямо сейчас!
          </h3>
          <div className="details">
            <p>
              Документ об окончании - <span>Диплом</span>
            </p>
            <p>
              Сложность - <span>начальная</span>
            </p>
            <p>
              Длительность - <span>5 месяцев</span>
            </p>
          </div>
        </div>
        <ButtonCourses />
      </div>
    </div>
  );
}

export default WelcomePage;
