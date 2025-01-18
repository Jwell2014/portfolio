import React from 'react';
import './App.css';
import Header from './composants/Header';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primeicons/primeicons.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex align-items-center border-bottom-1 surface-border surface-overlay w-full">
        <p className="w-full m-0" style={{ fontSize: '16rem' }}>PORTEFOLIO</p>
      </div>



    </div>

  );
}

export default App;
