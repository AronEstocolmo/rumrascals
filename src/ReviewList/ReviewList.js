import React, { Component } from 'react';
import styled from 'styled-components';
import Review from '../Review/Review';

//const ALL_REVIEWS_PATH = "10.17.14.18:8080/review";
//{this.state.reviews.map(review => <Review key={review.id} review={review} />)}


class ReviewList extends Component {
  state = {
    reviews: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://10.17.14.18:8080/review');
      const reviews = await res.json()
      console.log("reviews:");
      console.log(reviews);
      this.setState({
        reviews: reviews.response,
      });
    } catch (e) {
      console.log(e);
    }
  }

  
  render() {
    console.log(this.state.reviews)
    return (
      
      <ReviewListStyle>
        
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

