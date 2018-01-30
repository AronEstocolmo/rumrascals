import React, { Component } from 'react';
import './App.css';
import ReviewList from './ReviewList/ReviewList';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';
import styled from 'styled-components';

class Menu extends Component {
  render() {
    return (
      <MenuStyle>    
        <div className="Menu">
            <InnerStyle><Link to="/"><li>Rum</li></Link></InnerStyle>
            <InnerStyle><Link to="/aboutus"><li>About Us</li></Link></InnerStyle>
            <InnerStyle> <Link to="/contact"><li>Contact</li></Link></InnerStyle>
        </div>
      </MenuStyle>
    );
  }
}

export default Menu;

const MenuStyle = styled.div`
  text-align: center;
  padding: 1rem;
`;

const InnerStyle = styled.div`
  display: inline-block;
`;

