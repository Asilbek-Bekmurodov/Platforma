import React, { Component } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Products from "./components/products/products";
import Footer from "./components/footer";

export default class App extends Component {
  state = {
    productsData: [
      {
        tittle: "Fancy Product",
        isSale: false,
        isStarts: false,
        btnName: "View options",
      },
      {
        tittle: "Special Item",
        isSale: true,
        isStarts: true,
        btnName: "Add to card",
      },
      {
        tittle: "Sale Item",
        isSale: true,
        isStarts: false,
        btnName: "Add to card",
      },
      {
        tittle: "Popular Item",
        isSale: true,
        isStarts: false,
        btnName: "Add to card",
      },
      {
        tittle: "Sale Item",
        isSale: true,
        isStarts: false,
        btnName: "Add to card",
      },
      {
        tittle: "Fancy Product",
        isSale: false,
        isStarts: false,
        btnName: "Add to card",
      },
      {
        tittle: "Special Item",
        isSale: true,
        isStarts: true,
        btnName: "Add to card",
      },
      {
        tittle: "Popular Item",
        isSale: false,
        isStarts: true,
        btnName: "View options",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <Main />
        <Products productsData={this.state.productsData} />
        <Footer />
      </div>
    );
  }
}
