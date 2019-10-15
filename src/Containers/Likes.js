import React, { Component } from 'react';
import SingleTweet from '../Components/SingleTweet'

export class Likes extends Component {
  render() {
    return (
      <div className="likes">
        <h1>Likes</h1>
        {
          this.props.likes.map(like => {
            return <SingleTweet
              tweet={like}
              key={`like-${like.id}`}
              handleLike={this.props.handleLike}/>
          })
        }
      </div>
    );
  }
}

export default Likes;
