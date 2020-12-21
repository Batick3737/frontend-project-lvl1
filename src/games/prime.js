import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const correctAnswer = (gameQuestion) => {
  if (isPrime(gameQuestion)) {
    return 'yes';
  }
  return 'no';
};

const generateQuestion = () => {
  const gameQuestion = getRandomInt(0, 100);
  const answer = correctAnswer(gameQuestion);
  return [`${gameQuestion}`, `${answer}`];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
};
export default startGame;
