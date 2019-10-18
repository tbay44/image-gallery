import React from 'react';

const ExtraImages = ({ photos }) => {
  return (
    <div class='extra-images'>
      {photos.map((photo, n) => <ExtraImage key={`photo_${n}`} src={photo}/>)}
    </div>
  );
};

export default ExtraImages;
