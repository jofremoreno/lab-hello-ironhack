import React from 'react';
import logo from './logo.svg';
import './App.css';
//lo que importo desde de la carpeta components a App.js
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
        <Navbar />
      </div>
    </div>
  );
}

export default App;