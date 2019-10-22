import React from 'react';

const ProductImage = ({ src, changeView, id }) => (
  <div
    id={id}
    class='extra-image-container'
    onMouseEnter={() => {
      changeView(src);
    }}
    onMouseLeave={() => {
      changeView('');
    }}
    onClick={(e) => {
      let lastCharOfId;
      if (e.target.className === 'extra-image') {
        lastCharOfId = e.target.parentElement.id.slice(-1);
      } else {
        lastCharOfId = e.target.id.slice(-1);
      }
      console.log(e.target.id.slice(-1));
      changeView(src, Number(lastCharOfId));
    }}
  >
    <img class='extra-image' src={src} alt=''/>
  </div>
);

export default ProductImage;
