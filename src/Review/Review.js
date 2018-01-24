import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Review = ({ review }) => (
  <Router>
  <Link to={`/${review.id}`}>
  Rum of the day:
    <h1>{review.title}</h1>
      <Poster src={`${POSTER_PATH}${review.poster_path}`} alt={review.title} />
  </Link>  
  </Router>
);

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
