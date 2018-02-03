import React, { Component } from 'react';
import Masonry from "masonry-layout";

import './Grid.css';
import images from "../../images";

const MasonryOptions = {
  itemSelector: '.tile',
  stagger: 0
};

class Grid extends Component {

  state = {
    loaded: 0
  }

  onLoaded = () => {
    this.setState({ loaded: this.state.loaded + 1 });
  }

  render() {

    if (this.state.loaded === images.length) {
      new Masonry(this.element, MasonryOptions);
    }

    const tiles = images.map((item, index) => {
      return (
        <div className="tile" key={index}>
          <img src={item} alt={index} onLoad={() => this.onLoaded()} />
        </div>
      );
    });

    return (<div className="mb-5" ref={ref => this.element = ref}>{tiles}</div>);
  }
}

export default Grid;
