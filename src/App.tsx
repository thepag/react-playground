import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { ConwaysGameOfLife } from './modules';
import { SortingAlgorithms } from './modules';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <AppRouter />
  );
}

export function AppRouter() {
  return (
    <Router>
      <div>
        <Navigation />

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/conways">
            <Conways />
          </Route>
          <Route path="/sorting">
            <Sorting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/conways">Conway's</Link>
        </li>
        <li>
          <Link to="/sorting">Sorting</Link>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Playground</h2>
      </header>
    </div>
  );
}

function Conways() {
  return (
    <div className="page">
      <h2 className="page--title">Conway's Game Of Life</h2>
      <ConwaysGameOfLife />
    </div>
  );
}

function Sorting() {
  return (
    <div className="page">
      <h2 className="page--title">Sorting Algorithms</h2>
      <SortingAlgorithms />
    </div>
  );
}

export default App;
