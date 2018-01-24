import React, { Component } from 'react';
import styled from 'styled-components';
import Review from '../Review/Review';

const ALL_REVIEWS_PATH = "https://supercoolapi.sweet/reviews";

class ReviewList extends Component {
  state = {
    reviews: [],
  }

  async componentDidMount() {
    try {
      /*const res = await fetch('ALL_REVIEWS_PATH');
      const reviews = await res.json();
      this.setState({
        reviews: reviews.results,
      });*/
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <ReviewListStyle>
        {this.state.reviews.map(review => <Review key={review.id} review={review} />)}
      </ReviewListStyle>
    );
  }
}

export default ReviewList;

const ReviewListStyle = styled.div`
  display: list;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
