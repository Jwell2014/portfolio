import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './composants/Header';
import ProjectList from './composants/ProjectList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Header />
        <ProjectList />
        {/* Ajoute d'autres sections comme À propos et Contact ici */}
      </div>
    </div>

  );
}

export default App;
