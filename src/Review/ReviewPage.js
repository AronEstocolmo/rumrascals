/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Review';
/*
*/

class ReviewPage extends Component {
  state = {
    review: [
    ],
  }

  async componentWillMount() {
    try {
      const res = await fetch(`http://localhost:8080/review/${this.props.match.params.id}`);
      const review = await res.json();
      console.log("ReviewPage");
      console.log(review);
      this.setState({
        review: review,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { review } = this.state;
    console.log("reviews2:");
    console.log(this.state.review)
    return (
      <ReviewWrapper backdrop={`${review.banner}`}>
        <ReviewInfo>
          <Overdrive id={this.props.match.params.id}>
            <Poster src={`${review.rumImage}`} alt={review.title} />
          </Overdrive>
          <div>
            {this.state.review.rumName ? (
              <h1>{review.rumName}</h1>
            ) : (
              <h1>hi</h1>
            )
            }
            <h1>{review.rumPrice} kr</h1>
            <h3>{review.rating} / 5</h3>
            <p>{review.reviewText}</p>
          </div>
        </ReviewInfo>
      </ReviewWrapper>
    );
  }
}

export default ReviewPage;

const ReviewWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const ReviewInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
