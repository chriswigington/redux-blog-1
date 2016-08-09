import React, { Component } from 'react';
import CreateNewPost from './CreateNewPost'
import ListOfPosts from './ListOfPosts.js'

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <CreateNewPost />
        <br />
        <ListOfPosts />
      </div>
    );
  }
}

export default PostsContainer;
