// Code MovieReviews Here
export default class MovieReviews{
  render(){
    return(<div className='review-list'>
    <ul>
      {this.props.reviews.map((review) => <li>{review}</li>)}
    </ul>
    </div>);
  }
}