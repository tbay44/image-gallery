const getZoomSelectorDimensions = (imgWidth, imgHeight) => {
  imgWidth = ((document.getElementById('zoomed-image-container').clientWidth) / (imgWidth * 2.5) * 100).toString() + '%';
  imgHeight = ((document.getElementById('zoomed-image-container').clientHeight) / (imgHeight * 2.5) * 100).toString() + '%';
  return {
    zoomSelectorWidth: imgWidth,
    zoomSelectorHeight: imgHeight,
  };
};

export default getZoomSelectorDimensions;
