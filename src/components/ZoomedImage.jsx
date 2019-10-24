import React from 'react';

const ZoomedImage = ({ zooming, src, x, y }) => {
  if (zooming) {
    return (
      <img id='zoomed-image' src={src} alt=''/>
    );
  } else {
    return <div></div>;
  }
};

export default ZoomedImage;
