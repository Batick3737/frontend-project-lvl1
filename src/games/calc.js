import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const miniCalculator = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const generateQuestionAndAnswer = () => {
  const operation = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, operations.length);
  const randomOperation = operations[randomIndex];
  const randomNumber1 = getRandomInt(1, 20);
  const randomNumber2 = getRandomInt(1, 20);
  const questionGame = `${randomNumber1}${randomOperation}${randomNumber2}`;
  const answer = miniCalculator(randomNumber1, randomNumber2, randomOperation);
  return [questionGame, answer];
};

const gameDescription = 'What is the result of the expression?';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
export default startGame;
