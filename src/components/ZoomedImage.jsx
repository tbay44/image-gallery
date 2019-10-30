import React from 'react';

const ZoomedImage = ({ zooming, src, naturalHeight, naturalWidth, x, y }) => {
  if (zooming) {
    if (naturalHeight < 750 && naturalWidth < 750) {
      return <img id='zoomed-image zoom-125' src={src} alt=''/>;
    // eslint-disable-next-line no-else-return
    } else if (naturalHeight < 1000 && naturalWidth < 1000) {
      return <img id='zoomed-image zoom-150' src={src} alt=''/>;
    } else if (naturalHeight < 1200 && naturalWidth < 1200) {
      return <img id='zoomed-image zoom-200' src={src} alt=''/>;
    } else if (naturalHeight < 1500 && naturalWidth < 1500) {
      return <img id='zoomed-image zoom-250' src={src} alt=''/>;
    } else {
      return <img id='zoomed-image' src={src} alt=''/>;
    }
  } else {
    return null;
  }

}

export default ZoomedImage;
