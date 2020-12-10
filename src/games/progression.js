import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const generateLengthProgression = getRandomInt(6, 11);
const generateQuestionAndAnswer = () => {
  const generateStartProgression = getRandomInt(0, 20);
  const generateStepProgression = getRandomInt(2, 6);
  const indexProgression = getRandomInt(0, generateLengthProgression);
  const generateProgression = (startProgression, stepProgression, lengthProgression) => {
    const masive = [];
    for (let i = 0; i < lengthProgression; i += 1) {
      const number = startProgression + stepProgression * i;
      masive.push(number);
    }
    return masive;
  };

  const questionGame = generateProgression(generateStartProgression, generateStepProgression,
    generateLengthProgression);
  const correctAnswer = generateProgression(generateStartProgression, generateStepProgression,
    generateLengthProgression);
  questionGame[indexProgression] = '..';
  const answer = correctAnswer[indexProgression];
  return [questionGame, answer];
};

const gameDescription = 'What number is missing in the progression?';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
export default startGame;
