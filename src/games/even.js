import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const correctAnswer = (questionGame) => {
  if (isNumberEven(questionGame)) {
    return 'yes';
  }
  return 'no';
};
const generateQuestionAndAnswer = () => {
  const questionGame = getRandomInt(1, 100);
  const answer = correctAnswer(questionGame);
  return [questionGame, answer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
export default startGame;
