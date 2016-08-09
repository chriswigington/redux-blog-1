import React, { Component } from 'react';

class AuthorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {name: ''}
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form className="AuthorForm" onSubmit={this.handleSubmit}>
        <input placeholder="add author" onKeyPress={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default AuthorForm;
