import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const Review = ({ review }) => (
  <Link to={`/${review.id}`}>
    <Overdrive id={review.id.toString()}>
      <Poster src={`${review.rumImage}`} alt={review.title} />
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
  height: 8em;
  width: 8em;
`;
