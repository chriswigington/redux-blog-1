import React, { Component } from 'react';
import AuthorForm from './AuthorForm'
import AuthorsDropdown from './AuthorsDropdown'
import PostsContainer from './PostsContainer'
import reducer from '../Redux/Reducer'
import createStore from '../Redux/CreateStore'
import '../App.css';

const ADD_AUTHOR = 'ADD_AUTHOR';
const ADD_POST = 'ADD_POST'

var store = createStore(reducer);

class App extends Component {
  constructor() {
    super()
    this.state = {authorId: '', authors: []}
  }

  // payload: "author"
  addAuthor = (payload) => {
    store.dispatch({type: ADD_AUTHOR, payload: payload})
    this.setState({authorId: '', authors: store.getState().authors})
    console.log(store.getState())
  }

  //
  handleSelect = (authorId) => {
    console.log(authorId)
    this.setState({authorId: authorId, authors: store.getState().authors})
  }

  // payload: [author_id, "title", "content"]
  addPost = (payload) => {
    store.dispatch({type: ADD_POST, payload: payload})
  }

  render() {
    console.log("Rendering App")
    return (
      <div className="App">
        <h1>BLOG APP</h1>
        <AuthorForm onSubmit={this.addAuthor}/>
        <AuthorsDropdown authorsList={store.getState().authors} onSelect={this.handleSelect}/>
        <PostsContainer authorId={this.state.authorId} />
      </div>
    )
  }
}

export default App;
