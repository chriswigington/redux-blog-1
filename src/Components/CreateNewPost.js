import React, { Component } from 'react';

class CreateNewPost extends Component {
  render() {
    return (
      <form className="CreateNewPost" id="CreateNewPost">
        <input type="text" name="title" placeholder="enter title" />
        <br />
        <textarea form="CreateNewPost" cols="40" rows="20" />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default CreateNewPost;
