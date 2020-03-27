import React, { Component } from 'react';

class SearchBar extends Component {
  input = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" className="form-control form-search" onChange={this.input} placeholder="Hey"/>
      </div>
    );
  }
}


export default SearchBar;
