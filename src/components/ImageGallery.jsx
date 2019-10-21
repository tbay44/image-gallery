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

  componentDidMount() {
    window.addEventListener('uniqueId', () => {
      this.getImages(window.uniqueId);
    });
    this.getImages(2);
  }

  getImages(productId) {
    axios.get(`/product/${productId}`)
      .then((result) => {
        this.setState({
          current: result.data[0].prime_pic,
          photos: [result.data[0].prime_pic, result.data[0].pic_1, result.data[0].pic_2]
        });
      }).catch((err) => {
        console.log('handle error');
      });
  }


  render() {
    return ( // 582 by 575
      <React.Fragment>
        <CurrentImage src={this.state.current}/>
        <ProductImages photos={this.state.photos}/>
        <HaveOneToSell/>
      </React.Fragment>
    );
  }
}

export default ImageGallery;
