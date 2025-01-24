function calcTriArea(base = 1, height = 1) {
  return (base * height) / 2;
}

function calcSquareArea(length, width) {
  return length * width;
}

module.exports = {
  calcTriArea,
  calcSquareArea,
};
