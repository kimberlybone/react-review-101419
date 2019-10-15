import React from 'react';

const SingleTweet = props => {
  // const {content, username} = props.tweet
  let tweet = props.tweet
  console.log(props)
  return (
    <div className="single-tweet">
      <p>{props.tweet.content}</p>
      <span className="username">By: {props.tweet.username}</span>
      <span
        className="heart"
        role="img" aria-label="heart"
        onClick={() => props.handleLike(tweet)}>
        ❤️
      </span>
    </div>
  );
};

export default SingleTweet;
