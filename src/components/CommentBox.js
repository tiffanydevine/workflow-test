import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div className="comment-box-container">
        <h3 className="head-tertiary">Add a comment</h3>
        <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
          <textarea className="styled-textarea" value={this.state.comment} onChange={this.handleChange.bind(this)} />
          <button action="submit" className="common-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
