import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ReviewList from './ReviewList/ReviewList';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReviewList/>
       
      </div>
    );
  }
}

export default App;

