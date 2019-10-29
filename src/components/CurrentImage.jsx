import React from 'react';
import ReactDOM from 'react-dom';
import ImagesOnly from './ImagesOnly.jsx';
import gzsso from '../utils/ZoomSelectorStartOffset';
import checkInZoomRangeX from '../utils/checkZoomRangeX';
import checkInZoomRangeY from '../utils/checkZoomRangeY';

const CurrentImage = ({ tempSrc, src, zooming,
  toggleZoom, zoomSelectorWidth, zoomSelectorHeight,
  startX, startY, centerX, centerY }) => {
  if (tempSrc) {
    return (
      <React.Fragment>
        <div id='current-image-container'>
          <img id='main-view' src={tempSrc} alt =''/>
        </div>
        <div id='left-shadow'></div>
      </React.Fragment>
    );
  }
  if (zooming) {
    return (
      <React.Fragment>
        <div id='current-image-container-zooming'
        onMouseMove={(e) => {
          if (checkInZoomRangeX(e.clientX, startX) && checkInZoomRangeY(e.clientY, startY)) {
            // move zoom selector
            document.getElementById('zoom-selector').style.transform = `translateX(${e.clientX - startX}px) translateY(${e.clientY - startY}px)`;
            // move zoomed image
            document.getElementById('zoomed-image').style.transform = `translateX(${(startX - e.clientX)}px) translateY(${(startY - e.clientY)}px)`;
          }
        }
        }
        onMouseLeave={() => {
          document.getElementById('zoom-selector').style.transform = 'none';
          toggleZoom(false);
        }}
        >
          <img id='main-view' src={src} alt=''/>
          <div id='zoom-selector' style={{ width: zoomSelectorWidth, height: zoomSelectorHeight }}></div>
        </div>
        <div id='left-shadow'></div>
      </React.Fragment>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return (
      <React.Fragment>
        <div id='current-image-container'
        onMouseEnter={() => {
          document.getElementById('event-mask').style.display = 'flex';
          document.getElementById('zoom-trigger').style.display = 'flex';
        }}
        onMouseLeave={() => {
          document.getElementById('event-mask').style.display = 'none';
          document.getElementById('event-mask').style.transform = 'none';
        }}
        onClick={() => {
          ReactDOM.render(<ImagesOnly src={src}/>, document.getElementById('images-only'));
        }}
        >
          <img id='main-view' src={src} alt=''/>
          <div id='event-mask' style={{ display: 'none' }}>
            <div id='zoom-trigger'
            onMouseEnter={(e) => {
              const startX = e.clientX;
              const startY = e.clientY;
              const centerX = document.getElementById('main-ig-container').clientWidth / 2;
              const centerY = (document.getElementById('main-view').clientHeight / 2) + 15;
              const { naturalWidth, naturalHeight } = document.getElementById('main-view');
              toggleZoom(true, naturalWidth, naturalHeight, startX, startY, centerX, centerY);
            }}>
              <p><b>Mouse over to Zoom
              <br/>
              -
              <br/>
              Click to enlarge
              </b></p>
            </div>
          </div>
        </div>
        <div id='left-shadow'></div>
      </React.Fragment>
    );
  }
};

export default CurrentImage;
