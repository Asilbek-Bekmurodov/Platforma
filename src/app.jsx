import React, { Component } from "react";
import Cards from "./components/cards/cards";
import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";

export default class App extends Component {
  state = {
    cardsData: [
      {
        title: "Free",
        price: 0,
        usersCount: 10,
        gb: 2,
        support: "Email ",
        btnName: "Sign up for free"
      },
      {
        title: "Pro",
        price: 15,
        usersCount: 20,
        gb: 10,
        support: "Priority email ",
        btnName: "Get started",
      },
      {
        title: "Enterprise",
        price: 29,
        usersCount: 30,
        gb: 15,
        support: "Phone and email ",
        btnName: "Contact us",
      },
    ],
  };
  render() {
    const { cardsData } = this.state;
    return (
      <div className="container">
        <Navbar />
        <Main />
        <Cards setData={cardsData} />
        <Footer/>
      </div>
    );
  }
}

