import React from 'react';

const ProductImage = ({ src, changeView }) => (
  <div
    class='extra-image-container'
    onMouseEnter={() => {
      changeView(src, false);
    }}
    onMouseLeave={() => {
      changeView('');
    }}
    onClick={() => {
      changeView(src, true);
    }}
  >
    <img class='extra-image' src={src} alt=''/>
  </div>
);


export default ProductImage;
