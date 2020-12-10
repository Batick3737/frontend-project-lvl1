import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const correctAnswer = (number1, number2) => {
  if (number2 > 0) {
    const remainder = number1 % number2;
    return correctAnswer(number2, remainder);
  }

  return `${number1}`;
};
const generateQuestion = () => {
  const randomNumber1 = getRandomInt(1, 50);
  const randomNumber2 = getRandomInt(1, 50);
  const questionGame = `${randomNumber1} ${randomNumber2}`;
  const answer = correctAnswer(randomNumber1, randomNumber2);
  return [questionGame, answer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
};
export default startGame;
