
const checkInZoomRangeY = (mY, sY) => {
  const containerH = document.getElementById('current-image-container-zooming').clientHeight;
  const selectorH = document.getElementById('zoom-selector').clientHeight;
  return (Math.abs(mY - sY) < ((containerH - selectorH) / 2));
};

export default checkInZoomRangeY;
