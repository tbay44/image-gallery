import React from 'react';
import axios from 'axios';
import CurrentImage from './CurrentImage.jsx';
import ProductImages from './ProductImages.jsx';
import HaveOneToSell from './HaveOneToSell.jsx';
import ZoomedImage from './ZoomedImage.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temporary: '',
      permanent: '',
      selected: null,
      photos: [],
      zooming: false,
      imgW: null,
      imgH: null,
    };
    this.changeView = this.changeView.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
  }

  componentDidMount() {
    window.addEventListener('uniqueId', () => {
      this.getImages(window.uniqueId);
    });
    this.getImages(2);
  }

  getImages(productId) {
    axios.get(`http://ec2-54-193-123-144.us-west-1.compute.amazonaws.com/product/${productId}`)
      .then((result) => {
        this.setState({
          permanent: result.data[0].prime_pic,
          photos: [result.data[0].prime_pic, result.data[0].pic_1, result.data[0].pic_2],
        });
      }).catch((err) => {
        console.error(err);
      });
  }

  changeView(src, selectedNo) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(selectedNo)) {
      this.setState({
        permanent: src,
        selected: selectedNo,
      });
    } else {
      this.setState({
        temporary: src,
      });
    }
  }

  toggleZoom(zooming, imgW, imgH) {
    this.setState({
      zooming,
      imgW,
      imgH,
    });
  }

  render() {
    return ( // 582 by 575
      <React.Fragment>
        <div id='main-ig-container'>
          <CurrentImage
            src={this.state.permanent}
            tempSrc={this.state.temporary}
            zooming={this.state.zooming}
            toggleZoom={this.toggleZoom}
            imgW={this.state.imgW}
            imgH={this.state.imgH}
          />
          <ProductImages
            photos={this.state.photos}
            changeView={this.changeView}
            selected={this.state.selected}
          />
          <HaveOneToSell/>
        </div>
        <div id='zoomed-image-container'>
          <ZoomedImage
            zooming={this.state.zooming}
            src={this.state.permanent}
            zoomX={this.state.zoomX}
            zoomY={this.state.zoomY}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ImageGallery;
