import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="description-data">
          <p>OwlTop © 2020 - 2021 Все права защищены</p>
        </div>
        <div className="description-rules">
          <div className="user">
            <p>Пользовательское соглашение</p>
          </div>
          <div className="policy">
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
