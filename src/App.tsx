import React from 'react';
import { ConwaysGameOfLife, CellProvider } from './modules';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <CellProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <ConwaysGameOfLife />
      </div>
    </CellProvider>
  );
}

export default App;
