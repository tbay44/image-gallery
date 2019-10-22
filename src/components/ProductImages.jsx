import React from 'react';
import ProductImage from './ProductImage.jsx';

const ProductImages = ({ photos, changeView }) => (
  <div id='extra-images-container'>
    {photos.map((photo, n) => (
      <ProductImage
        key={`photo_${n}`}
        src={photo}
        changeView={changeView}
      />
    ))}
  </div>
);

export default ProductImages;
