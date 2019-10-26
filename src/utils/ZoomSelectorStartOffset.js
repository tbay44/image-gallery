const getZoomSelectorStartOffset = (sX, cX, sY, cY) => ({
  offsetX: (sX - cX).toString() + 'px',
  offsetY: (sY - cY).toString() + 'px',
});

export default getZoomSelectorStartOffset;
