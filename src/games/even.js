import { getRandomInt } from 'file:/root/frontend-project-lvl1/src/random.js';
import { gameEngine } from 'file:/root/frontend-project-lvl1/src/index.js';
const formulateQuestion = (question) => {
  return `${question}`;
}

const generateQuestion = () => { 
  const questionGame = getRandomInt(100);
  return questionGame;
}
const getCorrectAnswer = (questionGame) => { 
  if (questionGame % 2 === 0) {
    return "yes";
  }
    return "no";
}
const gameDescription = () => {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}
export const startGame = () => {
  gameEngine(gameDescription, generateQuestion, formulateQuestion, getCorrectAnswer);
}