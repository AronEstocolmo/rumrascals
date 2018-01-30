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
import Menu from './Menu';
import Contact from './Contact'
import AboutUs from './AboutUs'

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={RumRaskals} className="App-logo" alt="logo" />
        </Link>
        
      </header>
      <Menu/>

      <Switch>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/" component={ReviewList}/>
        <Route path="/:id" component={ReviewPage}/>
      </Switch>

      
    
    </div>
  </Router>  
 
);

export default App;

