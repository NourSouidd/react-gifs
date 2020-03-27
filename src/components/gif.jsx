import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img className="gif" src={src} alt="giphy" onClick={this.handleClick} />
    );
  }
}


export default Gif;
