import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Review = ({ review }) => (
  <Link to={`/${review.id}`}>
    <Overdrive id={review.id}>
      <Poster src={`${POSTER_PATH}${review.poster_path}`} alt={review.title} />
    </Overdrive>
  </Link>
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
