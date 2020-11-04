import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const correctAnswer = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return `${number1 + number2}`;
    case '-':
      return `${number1 - number2}`;
    default:
      return `${number1 * number2}`;
  }
};

const generateQuestion = () => {
  const operation = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, operation.length);
  const randomOperation = operation[randomIndex];
  const randomNumber1 = getRandomInt(1, 20);
  const randomNumber2 = getRandomInt(1, 20);
  const questionGame = `${randomNumber1}${randomOperation}${randomNumber2}`;
  console.log(questionGame);
  return correctAnswer(randomNumber1, randomNumber2, randomOperation);
};

const gameDescription = 'What is the result of the expression?';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
};
export default startGame;
