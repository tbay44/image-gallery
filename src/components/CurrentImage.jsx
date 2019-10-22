import React from 'react';

const CurrentImage = ({ src, tempSrc }) => {
  if (tempSrc) {
    return (
      <div id='current-image-container'>
        <img id='main-view' src={tempSrc} alt =''/>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div id='left-shadow'></div>
      <div id='left-shadow-mask'></div>
      <div id='current-image-container'
      onmouseenter={() => {
        document.getElementById('event-mask').style.display = 'block';
      }}
      onmouseleave={() => { // Hide all modal divs
        document.getElementById('zoomed-image').style.display = 'none';
        document.getElementById('event-mask').style.display = 'none';
        document.getElementById('zoom-selector').style.display = 'none';
      }}>
        <img id='main-view' src={src} alt=''/>
        <div id='event-mask' style={{display: 'none'}}>
          <div id='zoom-trigger'
          onmouseenter={() => {
            document.getElementById('event-mask').style.display = 'none';
            document.getElementById('zoom-selector').style.display = 'inline';
            document.getElementById('zoomed-image').style.display = 'block';
          }}></div>
            Mouse over to Zoom
            -
            Click to enlarge
        </div>
      </div>
      <div id='zoomed-image' style={{display: 'none'}}>
        <img src={src} alt=''/>
      </div>
    </React.Fragment>
  );
};

export default CurrentImage;
