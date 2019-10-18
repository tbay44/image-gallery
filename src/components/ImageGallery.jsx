import React from 'react';
import axios from 'axios';

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
    })
    .catch((err) => {

    }
  }

  render() {
    return (

    );
  }
}

export default ImageGallery;
