import React, { Component } from "react";
import Card from "./card";

export default class Cards extends Component {
  render() {
    const { setData } = this.props;
    return (
      <div>
        <div className="container cards-wrapper">
          {setData.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    );
  }
}
