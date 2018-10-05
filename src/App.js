import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to F2 on Docker</h1>
        </header>
        <p className="App-intro">
          Docker, Kubernetes, React for f2-frontend <code>src/App.js</code> and save to reload.
          with -v /apps/node_modules -v $(pwd): /apps, and also working on docker-compose.yml
        </p>
      </div>
    );
  }
}

export default App;
