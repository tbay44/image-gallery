import React from 'react';
import axios from 'axios';
import CurrentImage from './CurrentImage.jsx';
import ExtraImages from './ExtraImages.jsx';
import HaveOneToSell from './HaveOneToSell.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      photos: [],
    };
  }

  getImages() {
    axios.get(`/product/${window.id}`)
      .then((result) => {
        this.setState({
          current: result.data.prime_pic,
          photos: [result.data.prime_pic, result.data.pic_1, result.data.pic_2]
        });
      }).catch((err) => {
        console.log('handle error');
      });
  }


  render() {
    if (this.state.enlarged) {
      return (

      );
    } else {
      return (
      // 582 by 575
      <div class='image-gallery'>
        <CurrentImage src={this.state.current}/>
        <ExtraImages photos={this.state.photos}/>
        <HaveOneToSell/>
      </div>
      );
    }
  }
}

export default ImageGallery;
