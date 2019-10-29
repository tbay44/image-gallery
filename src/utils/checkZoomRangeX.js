const checkInZoomRangeX = (mX, sX) => {
  const containerW = document.getElementById('current-image-container-zooming').clientWidth;
  const selectorW = document.getElementById('zoom-selector').clientWidth;
  return (Math.abs(mX - sX) < ((containerW - selectorW) / 2));
};

export default checkInZoomRangeX;
