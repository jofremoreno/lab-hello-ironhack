import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1>Say hello to ReactJS</h1>
        <p className="title-text">
          You will learn Frontend frameworks from scratch, to beacome a Ninka{' '}
          <span>(Ninka really?)</span> Developer.
        </p>
        <div className="button-container">
          <button className="App-button">Awesome!</button>
        </div>
      </div>
    );
  }
}

export default Title;