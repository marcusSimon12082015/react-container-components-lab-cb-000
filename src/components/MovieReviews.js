// Code MovieReviews Here
import React, { Component } from 'react';

export default class MovieReviews extends React.Component{
  render(){
    return(<div className='review-list'>
    <ul>
      {this.props.reviews.map((review) => <li>{review}</li>)}
    </ul>
    </div>);
  }
}
