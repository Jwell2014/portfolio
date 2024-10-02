import React from 'react';
import './App.css';
import Header from './composants/Header';
import ProjectList from './composants/ProjectList';

import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-cyan/theme.css";


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
