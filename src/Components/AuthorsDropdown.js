import React, { Component } from 'react';
import Author from "./Author"

class AuthorsDropdown extends Component {
  handleSelect=(event) => {
    this.props.handleSelect(event.target.value)
  }

  render() {
    return (
      <select className="AuthorsDropdown" onSelect={this.handleSelect}>
        <option value="choose an author">choose an author</option>
        {this.props.authorsList.map(function(author) {
          return <Author value={author.id} key={author.id} name={author.name} />
        })}
      </select>
    );
  }
}

export default AuthorsDropdown;
