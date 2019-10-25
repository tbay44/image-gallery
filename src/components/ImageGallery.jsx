import React from 'react';
import axios from 'axios';
import CurrentImage from './CurrentImage.jsx';
import ProductImages from './ProductImages.jsx';
import HaveOneToSell from './HaveOneToSell.jsx';
import ZoomedImage from './ZoomedImage.jsx';
import gzsp from '../utils/ZoomSelectorPercentage';

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
      zoomSelectorWidth: null,
      zoomSelectorHeight: null,
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
        // eslint-disable-next-line
        this.setState({
          permanent: result.data[0],
          photos: result.data,
          temporary: '',
          selected: null,
          zooming: false,
          imgW: null,
          imgH: null,
          zoomSelectorWidth: null,
          zoomSelectorHeight: null,
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
    const { zoomSelectorWidth, zoomSelectorHeight } = gzsp(imgW, imgH);
    this.setState({
      zooming,
      imgW,
      imgH,
      zoomSelectorWidth,
      zoomSelectorHeight,
    });
  }

  render() {
    if (this.state.zooming) {
      return (
        <React.Fragment>
          <div id='main-ig-container-zoom'>
            <CurrentImage
              src={this.state.permanent}
              tempSrc={this.state.temporary}
              zooming={this.state.zooming}
              toggleZoom={this.toggleZoom}
              zoomSelectorWidth={this.state.zoomSelectorWidth}
              zoomSelectorHeight={this.state.zoomSelectorHeight}
            />
            <ProductImages
              photos={this.state.photos}
              changeView={this.changeView}
              selected={this.state.selected}
            />
            <HaveOneToSell/>
            </div>
            <div>
            <ZoomedImage
              zooming={this.state.zooming}
              src={this.state.permanent}
              zoomX={this.state.zoomX}
              zoomY={this.state.zoomY}
            />
            </div>
        </React.Fragment>
      );
      // eslint-disable-next-line no-else-return
    } else {
      return (
        <React.Fragment>
          <div id='main-ig-container'>
            <CurrentImage
              src={this.state.permanent}
              tempSrc={this.state.temporary}
              zooming={this.state.zooming}
              toggleZoom={this.toggleZoom}
              zoomSelectorWidth={this.state.zoomSelectorWidth}
              zoomSelectorHeight={this.state.zoomSelectorHeight}
            />
            <ProductImages
              photos={this.state.photos}
              changeView={this.changeView}
              selected={this.state.selected}
            />
            <HaveOneToSell/>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ImageGallery;
