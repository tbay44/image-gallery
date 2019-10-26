import React from 'react';
import ImagesOnlyMain from './ImagesOnlyMain.jsx';

class ImagesOnly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.state);
    return (
      <div id='images-only-component'>
        <ImagesOnlyMain src={this.props.src}/>
      </div>
    );
  }
};

export default ImagesOnly;
