module.exports = function reverse(n) {
  const numToStr = n.toString();
  const reversedStr = numToStr.split('').reverse().join('');
  return parseInt(reversedStr, 10);
}
