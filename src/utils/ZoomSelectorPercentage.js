const getZoomSelectorDimensions = (imgWidth, imgHeight) => ({
  zoomSelectorWidth: ((document.body.clientWidth * 0.6389) / (imgWidth * 2) * 100).toString() + '%',
  zoomSelectorHeight: ((document.body.clientHeight * 0.6389) / (imgHeight * 2) * 100).toString() + '%',
});

export default getZoomSelectorDimensions;
