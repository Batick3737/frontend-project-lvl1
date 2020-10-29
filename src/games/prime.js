import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const correctAnswer = (number) => {
  if (number < 2) {
    return "no";
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return "no";
    }
  }
    return "yes";
}

const generateQuestion = () => { 
  const questionGame = getRandomInt(0,100);
  console.log(`${questionGame}`);
  return correctAnswer(questionGame)
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';  

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
}