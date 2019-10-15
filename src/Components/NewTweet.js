import React, { Component } from 'react';

export class NewTweet extends Component {
  state = {
    content: "",
    username: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.makeNewTweet(this.state)
    this.setState({
      content: "",
      username: ""
    })
  }

  render() {
    return (
      <form className="tweet-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <input
          name="content"
          className="tweet-input"
          type="text"
          value={this.state.tweet}
          placeholder="Tweet" />
        <input
          name="username"
          type="text"
          value={this.state.username}
          placeholder="Username" />
        <input type="submit" value="Tweet" />
      </form>
    );
  }
}

export default NewTweet;
