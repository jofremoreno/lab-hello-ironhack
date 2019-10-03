import React from 'react';
import logo from './logo.svg';
import './App.css';
//lo que importo desde de la carpeta components a App.js
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
    </div>
  );
}

export default App;