import React from 'react';
import './App.css';
//lo que importo desde de la carpeta components a App.js
import Header from './components/Header';
import Title from './components/Title';
import Cards from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
        {/* <Navbar /> */}
        <Title />
        <Cards />
      </div>
    </div>
  );
}

export default App;