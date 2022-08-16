import "./App.css";
import logo from "./images/logo.svg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header__left">
          <img src={logo} alt="" />
          <ul className="header__left__list">
            <li className="item"><i className="fa-light fa-desktop"></i></li>
            <li className="item"><span className="vertical-line"></span></li>
            <li className="item"><i className="fa-thin fa-mobile-notch"></i></li>
          </ul>
        </div>
        <div className="header__right">
          <ul className="header__right__list">
            <li className="item">
              Нажмите Редактировать, чтобы создать ваш сайт!
            </li>
            <li className="item">подробнее</li>
            <li className="item">
              <button>редактировать</button>
            </li>
          </ul>
        </div>
      </header>
      <div className="homepage">
        <h2 className="title">олег марков </h2>
        <ul className="homepage-list">
          <li className="item active">главная </li>
          <li className="item">обо мне </li>
          <li className="item">связаться</li>
        </ul>
        <div className="images">
          <div className="left">
            <img src={img1} alt="" />
            <img src={img4} alt="" />
            <img src={img7} alt="" />
          </div>
          <div className="center">
            <img src={img2} alt="" />
            <img src={img5} alt="" />
            <img src={img8} alt="" />
          </div>
          <div className="right">
            <img src={img3} alt="" />
            <img src={img6} alt="" />
            <img src={img9} alt="" />
          </div>
        </div>
        <p className="subtitle">© 2023 Олег Марков. Сайт создан на Wix.com.</p>
        <ul className="sublist">
          <li className="item"><i className="fa-brands fa-facebook-square fa-2xl"></i></li>
          <li className="item"><i className="fa-brands fa-flickr fa-2xl"></i></li>
          <li className="item"><i className="fa-brands fa-twitter-square fa-2xl"></i></li>
          <li className="item"><i className="fa-brands fa-pinterest-square fa-2xl"></i></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
