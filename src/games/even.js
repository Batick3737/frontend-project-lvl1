import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const isEven = (number) => (number % 2 === 0);

const generateQuestionAndAnswer = () => {
  const gameQuestion = getRandomInt(1, 100);
  const answer = isEven(gameQuestion) ? 'yes' : 'no';
  return [`${gameQuestion}`, `${answer}`];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
export default startGame;
