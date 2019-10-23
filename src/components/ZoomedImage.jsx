import React from 'react';

const ZoomedImage = ({ zooming, src, x, y }) => {
  return (zooming) ? (
    <div id='zoomed-image'>
      <img src={src} instrinsicsize alt=''/>
    </div>
  ) : false;
};

export default ZoomedImage;
