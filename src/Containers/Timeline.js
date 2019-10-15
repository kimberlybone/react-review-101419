import React, { Component } from 'react';
import SingleTweet from '../Components/SingleTweet'

export class Timeline extends Component {
  renderTweets = () => {
    return this.props.tweets.map(tweet => {
      return <SingleTweet
        tweet={tweet}
        key={`tweet-${tweet.id}`}
        handleLike={this.props.handleLike}/>
    })
  }
  render() {
    return (
      <div className="timeline">
        <h1>Timeline</h1>
        {this.renderTweets()}
      </div>
    );
  }
}

export default Timeline;
