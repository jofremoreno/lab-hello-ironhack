import React from "react";


const Card = (props) => {

    return (
      <div className="App-card">
        <img
          src={props.imageName} alt="gears"/> 
        <h2 className="App-title-card">{props.title}</h2>
        <p className="App-text-card">{props.text}</p>
      </div>
    );
  }

export default Card;