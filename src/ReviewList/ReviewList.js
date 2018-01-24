import React, { Component } from 'react';
import './App.css';
import Review from './Review';

const ALL_REVIEWS_PATH = "https://supercoolapi.sweet/reviews";

class ReviewList extends PureComponent {
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
      <ReviewList>
        {this.state.reviews.map(review => <Review key={review.id} review={review} />)}
      </ReviewList>
    );
  }
}

export default ReviewList;

const ReviewList = styled.div`
  display: list;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
