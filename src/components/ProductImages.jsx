import React from 'react';
import ProductImage from './ProductImage.jsx';

const ProductImages = ({ photos }) => (
  <div class='extra-images'>
    {photos.map((photo, n) => <ProductImage key={`photo_${n}`} src={photo}/>)}
  </div>
);

export default ProductImages;
