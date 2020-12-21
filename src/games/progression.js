import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const generateProgression = (startProgression1, stepProgression1, lengthProgression1) => {
  const progression = [];
  for (let i = 0; i < lengthProgression1; i += 1) {
    const numberProgression = startProgression1 + stepProgression1 * i;
    progression.push(numberProgression);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const lengthProgression = getRandomInt(6, 11);
  const startProgression = getRandomInt(0, 20);
  const stepProgression = getRandomInt(2, 6);
  const indexHiddenElementProgression = getRandomInt(0, lengthProgression);
  const gameQuestion = generateProgression(startProgression, stepProgression,
    lengthProgression);
  const correctAnswer = generateProgression(startProgression, stepProgression,
    lengthProgression);
  gameQuestion[indexHiddenElementProgression] = '..';
  const answer = correctAnswer[indexHiddenElementProgression];
  return [`${gameQuestion}`, `${answer}`];
};

const gameDescription = 'What number is missing in the progression?';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
export default startGame;
