import { getRandomInt } from 'file:/root/frontend-project-lvl1/src/random.js';
import { gameEngine } from 'file:/root/frontend-project-lvl1/src/index.js';
const formulateQuestion = (question) => {
  return `${question}`;
}
const generateQuestion = () => { 
  const questionGame = getRandomInt(100);
  return questionGame;
}
const getCorrectAnswer = (number) => {
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
const gameDescription = () => {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';  
}
export const startGame = () => {
  gameEngine(gameDescription, generateQuestion, formulateQuestion, getCorrectAnswer);
}