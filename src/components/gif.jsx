import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div className="selected-gif">
        <div className="gif">
          <img src={src} alt="giphy"/>
        </div>
      </div>
    );
  }
}


export default Gif;
