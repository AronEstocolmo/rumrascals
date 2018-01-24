import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ReviewList from './ReviewList/ReviewList';
import Menu from './Menu';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Review from './Review/Review';

const App = () => (
      <Router>
      <div className="App">
        <header className="App-header">
          <Menu/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Switch>
          <Route exact path="/" component={ReviewList}/>
          <Route exact path="/:id" component={Review}/>

        </Switch>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <ReviewList/>
      </div>
      </Router>    
);

export default App;

