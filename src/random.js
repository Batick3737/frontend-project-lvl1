function getRandomInt2(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export const getRandomInt = (min, max) => getRandomInt2(max - min) + min;
export default getRandomInt;
