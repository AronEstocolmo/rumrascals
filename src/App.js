import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import RumRaskals from './img/RumRaskals.png';
import ReviewList from './ReviewList/ReviewList';
import ReviewPage from './Review/ReviewPage';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={RumRaskals} className="App-logo" alt="logo" />
        </Link>
      </header>

      <Switch>
        <Route exact path="/" component={ReviewList}/>
        <Route path="/:id" component={ReviewPage}/>
      </Switch>
    </div>
  </Router>    
);

export default App;

