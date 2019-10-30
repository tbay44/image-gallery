const getZoomSelectorDimensions = (imgWidth, imgHeight) => ({
  zoomSelectorWidth: ((document.getElementById('image-gallery').clientWidth * 0.639) / (imgWidth * 2) * 100).toString() + '%',
  zoomSelectorHeight: ((document.getElementById('image-gallery').clientHeight) / (imgHeight * 2) * 100).toString() + '%',
});

export default getZoomSelectorDimensions;
