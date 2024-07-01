import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmU4YjdjMjM5YzAwMTUyZjRiNmUiLCJpYXQiOjE3MTk4MzQ1ODgsImV4cCI6MTcyMTA0NDE4OH0.hHarO-w6zdPV4yhQLDKN3cdJeSB2gCx6uUlN1gUzAJ4",
        },
      });
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.setState({ isLoading: true, isError: false, comments: [] });
      this.fetchComments();
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
