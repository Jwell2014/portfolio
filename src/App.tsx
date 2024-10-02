import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './composants/Header';
import ProjectList from './composants/ProjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ProjectList />
      </div>
    </div>

  );
}

export default App;
