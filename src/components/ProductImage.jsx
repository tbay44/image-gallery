import React from 'react';

const ProductImage = ({ src, changeView }) => (
  <div
    class='extra-image-container'
    onmouseenter={() => {
      changeView(src, false);
    }}
    onmouseleave={() => {
      changeView('');
    }}
    onclick={() => {
      changeView(src, true);
    }}
  >
    <img class='extra-image' src={src} alt=''/>
  </div>
);


export default ProductImage;
