import React, { Component } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import avatarHeader from "./images/avatar-header.webp";
import heroImg from "./images/swen-isle.webp";
import avatarFooter from "./images/avatar-footer.webp";

export class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header>
          <div className="header__left">
            <img src={logo} alt="" />
            <ul className="header__left__list">
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

        <div className="icons">
          <p className="twitter"><i class="fa-brands fa-twitter "></i></p>
          <p className="facebook"><i class="fa-brands fa-facebook-f "></i></p>
        </div>

        <div className="heroNavbar">
          <div className="navbar">
            <h2 className="title">K. Griffith</h2>
            <ul className="list">
              <li className="item">Appearances</li>
              <li className="item">books</li>
              <li className="item">news</li>
              <li className="item">about</li>
              <li className="item">contact</li>
            </ul>
          </div>
          <span className="horizontLine"></span>
          <div className="avatar">
            <img src={avatarHeader} alt="" className="avatar-img" />
            <div className="avatar-info">
              <h2 className="avatar-title">
                Kayla Griffith
              </h2>
              <p className="avatar-subtitle">
                Award Winning Author
              </p>
            </div>
          </div>

        </div>

        <div className="bg-swen">
          <div className="section-swen">
            <div className="info">
              <span className="toptitle">New Release</span>
              <h3 className="title">
              The Swan Isle (2023)
              </h3>
              <p className="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
              <p className="subtitle">
                Order Now
              </p>
              <ul className="list">
                <li className="item">Amazon</li>
                <li className="item">Google</li>
                <li className="item">ibooks</li>
              </ul>
            </div>
            <img src={heroImg} alt="" className="swen-img" />
          </div>
        </div>

        <div className="section-praise">
          <h2 className="title">
            Praise & Reviews
          </h2>
          <ul className="list">
            <li className="item">
              <span className="qoshtirnoq"><i class="fa-solid fa-quote-left"></i></span>
              <p className="text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className="subtitle">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
              <span className="underline"></span>
            </li>
            <li className="item">
              <span className="qoshtirnoq"><i class="fa-solid fa-quote-left"></i></span>
              <p className="text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className="subtitle">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
              <span className="underline"></span>
            </li>
            <li className="item">
              <span className="qoshtirnoq"><i class="fa-solid fa-quote-left"></i></span>
              <p className="text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className="subtitle">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
              <span className="underline"></span>
            </li>
          </ul>
        </div>

        <div className="section-see">
          <h2 className="title">
            See Upcoming Appearances
          </h2>
          <p className="description">
            I'm a paragraph. Click here to add your own text and edit me. It's easy.
          </p>
          <ul className="list">
            <li className="item">
              <p className="text">
              January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</p>
              <button className="join">join</button>
            </li>
            <li className="item">
              <p className="text">January 31st 2023, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</p>
              <button className="join">join</button>
            </li>
            <li className="item">
              <p className="text">March 2nd 2023, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</p>
              <button className="join">join</button>
            </li>
          </ul>

          <div className="about">
            <img src={ avatarFooter } alt="" className="avatar-img" />
            <h2 className="title">About Kayla Griffith</h2>
            <p className="text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <button className="read">Read More</button>
          </div>
        <p className="footer">© 2023 by K.Griffith. Proudly created with Wix.com</p>
        </div>
      </div>
    );
  }
}

export default App;
