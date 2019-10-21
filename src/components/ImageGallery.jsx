import React from 'react';
import axios from 'axios';
import CurrentImage from './CurrentImage.jsx';
import ProductImages from './ProductImages.jsx';
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
    return ( // 582 by 575
      <React.Fragment>
        <h1>Image Gallery</h1>
        <CurrentImage src={this.state.current}/>
        <ProductImages photos={this.state.photos}/>
        <HaveOneToSell/>
      </React.Fragment>
    );
  }
}

export default ImageGallery;
