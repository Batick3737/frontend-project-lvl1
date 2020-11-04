import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const correctAnswer = (questionGame) => {
  if (questionGame % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const generateQuestion = () => {
  const questionGame = getRandomInt(1, 100);
  console.log(`${questionGame}`);
  return correctAnswer(questionGame);
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
};
