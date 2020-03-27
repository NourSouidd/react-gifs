import React, { Component } from 'react';

class SearchBar extends Component {
  search = () => {
    giphy.id([
      'TJOLuHXwPZtSYuOsM9',
      '13RW3MoCRy28Ja'
    ], function (err, res) {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <input type="text" className="form-search"/>
      </div>
    );
  }
}


export default SearchBar;
