import React from 'react';

const CurrentImage = ({ src }) => {
  return (
    <React.Fragment>
      <div className='current-image-container'
      onmouseenter={() => {
        document.getElementById('event-mask').style.display = 'block';
      }}
      onmouseleave={() => { // Hide all modal divs
        document.getElementById('zoomed-image').style.display = 'none';
        document.getElementById('event-mask').style.display = 'none';
        document.getElementById('zoom-selector').style.display = 'none';
      }}>
        <img src={src} alt=''/>
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
