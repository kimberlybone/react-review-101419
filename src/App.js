import React, { Component } from 'react';
import Timeline from './Containers/Timeline';
import Likes from './Containers/Likes';
import NewTweet from './Components/NewTweet';
import './App.scss';

export class App extends Component {
  state = {
    tweets: [],
    likes: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/tweets')
    .then(res=>res.json())
    .then(tweets => {
      this.setState({tweets: tweets})
    })
  }

  makeNewTweet = (tweetObj) => {
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tweetObj)
    })
    .then(res => res.json())
    .then(newTweet => {
      this.setState({
        tweets: [newTweet, ...this.state.tweets]
      })
    })
  }

  handleLike = (tweetObj) => {
    if(!this.state.likes.includes(tweetObj)){
      this.setState({
        likes: [tweetObj, ...this.state.likes]
      })
    }
  }

  handleUnlike = (tweetObj) => {
    let newTweets = this.state.likes.filter(tweet => tweet.id !== tweetObj.id)
    if(this.state.likes.includes(tweetObj)){
      this.setState({likes: newTweets})
    }
  }

  render() {
    return (
      <>
        <NewTweet makeNewTweet={this.makeNewTweet}/>
        <Timeline tweets={this.state.tweets}
          handleLike={this.handleLike}/>
        <Likes likes={this.state.likes}
          handleLike={this.handleUnlike}/>
      </>
    );
  }
}

export default App;
