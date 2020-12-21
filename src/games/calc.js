import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const countingMiniCalculator = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return operation;
  }
};

const generateQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, operations.length);
  const randomOperation = operations[randomIndex];
  const randomNumber1 = getRandomInt(1, 20);
  const randomNumber2 = getRandomInt(1, 20);
  const gameQuestion = `${randomNumber1}${randomOperation}${randomNumber2}`;
  const answer = countingMiniCalculator(randomNumber1, randomNumber2, randomOperation);
  return [`${gameQuestion}`, `${answer}`];
};

const gameDescription = 'What is the result of the expression?';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
export default startGame;
