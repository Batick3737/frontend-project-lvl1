import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const findingGreatestCommonDivisorOfTwoIntegers = (number1, number2) => {
  if (number2 > 0) {
    const remainder = number1 % number2;
    return findingGreatestCommonDivisorOfTwoIntegers(number2, remainder);
  }
  return number1;
};
const generateQuestion = () => {
  const randomNumber1 = getRandomInt(1, 50);
  const randomNumber2 = getRandomInt(1, 50);
  const gameQuestion = `${randomNumber1} ${randomNumber2}`;
  const answer = findingGreatestCommonDivisorOfTwoIntegers(randomNumber1, randomNumber2);
  return [`${gameQuestion}`, `${answer}`];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
};
export default startGame;
