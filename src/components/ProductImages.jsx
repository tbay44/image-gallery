import React from 'react';
import ProductImage from './ProductImage.jsx';

const ProductImages = ({ photos, changeView, selected }) => (
  <div id='extra-images-container'>
    {photos.map((photo, n) => (
      <ProductImage
        key={`photo_${n}`}
        src={photo}
        changeView={changeView}
        id={(n === selected) ? 'selected-extra-image-container' : `photo_${n}`}
      />
    ))}
  </div>
);

export default ProductImages;
