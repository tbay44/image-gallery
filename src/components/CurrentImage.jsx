import React from 'react';

const CurrentImage = ({ tempSrc, src, zooming, toggleZoom, selectionWidth, selectionHeight }) => {
  if (tempSrc) {
    return (
      <React.Fragment>
        <div id='left-shadow'></div>
        <div id='current-image-container'>
          <img id='main-view' src={tempSrc} alt =''/>
        </div>
      </React.Fragment>
    );
  }
  if (zooming) {
    return (
      <React.Fragment>
        <div id='left-shadow'></div>
        <div id='current-image-container-zooming'
        onMouseMove={(e) => {
          console.log(e.clientX, e.clientY);
        }}
        onMouseLeave={() => {
          document.getElementById('image-gallery').style.display = 'block';
          toggleZoom(false);
        }}
        >
          <img id='main-view' src={src} alt=''/>
          <div id='zoom-selector' style={{ width: zoomSelectorWidth, height: zoomSelectorHeight }}></div>
        </div>
      </React.Fragment>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return (
      <React.Fragment>
        <div id='left-shadow'></div>
        <div id='current-image-container'
        onMouseEnter={() => {
          document.getElementById('event-mask').style.display = 'flex';
          document.getElementById('zoom-trigger').style.display = 'flex';
        }}
        onMouseLeave={() => {
          document.getElementById('event-mask').style.display = 'none';
        }}
        >
          <img id='main-view' src={src} alt=''/>
          <div id='event-mask' style={{ display: 'none' }}>
            <div id='zoom-trigger'
            onMouseEnter={() => {
              const { naturalWidth, naturalHeight } = document.getElementById('main-view');
              document.getElementById('event-mask').style.display = 'none';
              document.getElementById('image-gallery').style.display = 'grid';
              toggleZoom(true, naturalWidth, naturalHeight);
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
      </React.Fragment>
    );
  }
};

export default CurrentImage;
