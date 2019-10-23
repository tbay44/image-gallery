import React from 'react';

class ZoomedImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
    };
  }

  render() {
    return (this.props.zooming) ? (
      <div id='zoomed-image'>
      </div>
    ) : (
        <div>{this.state.x}</div>
    );
  }
}

export default ZoomedImage;
