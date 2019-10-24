import React from 'react';

const CurrentImage = ({ src, tempSrc, toggleZoom }) => {
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
  return (
    <React.Fragment>
      <div id='left-shadow'></div>
      <div id='current-image-container'
      onMouseEnter={() => {
        document.getElementById('event-mask').style.display = 'flex';
        document.getElementById('zoom-trigger').style.display = 'flex';
      }}
      onMouseLeave={() => { // Hide all modal divs
        toggleZoom(false);
        document.getElementById('event-mask').style.display = 'none';
        document.getElementById('zoom-selector').style.display = 'none';
      }}>
        <img id='main-view' src={src} alt=''/>
        <div id='event-mask'>
          <div id='zoom-trigger'
          onMouseEnter={() => {
            toggleZoom(true);
            document.getElementById('event-mask').style.display = 'none';
            let zoomedImageWidth = document.getElementById('zoomed-image').clientWidth;
            let zoomedImageHeight = document.getElementById('zoomed-image').clientHeight;
            document.getElementById('zoom-selector').style.display = 'inline';
          }}>
            <p><b>Mouse over to Zoom
            <br/>
            -
            <br/>
            Click to enlarge
            </b></p>
          </div>
        </div>
        <div id='zoom-selector'></div>
      </div>
    </React.Fragment>
  );
};

export default CurrentImage;
