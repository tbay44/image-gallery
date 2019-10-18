import React from 'react';

const CurrentImage = ({ src }) => {
  return (
    <div className='current-image-container'>
      <img src={src}></img>
    </div>
  );
};

export default CurrentImage;
