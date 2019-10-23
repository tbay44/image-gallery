import React from 'react';

const CurrentImage = ({ src, tempSrc }) => {
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
      }}
      onMouseLeave={() => { // Hide all modal divs
        document.getElementById('zoomed-image').style.display = 'none';
        document.getElementById('event-mask').style.display = 'none';
        document.getElementById('zoom-selector').style.display = 'none';
      }}>
        <img id='main-view' src={src} alt=''/>
        <div id='event-mask'>
          <div id='zoom-trigger'
          onMouseEnter={() => {
            document.getElementById('event-mask').style.display = 'none';
            document.getElementById('zoom-selector').style.display = 'inline';
            document.getElementById('zoomed-image').style.display = 'block';
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
      <div id='zoomed-image' style={{display: 'none'}}>
        <img src={src} alt=''/>
      </div>
    </React.Fragment>
  );
};

export default CurrentImage;
