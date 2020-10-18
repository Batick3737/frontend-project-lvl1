import { getRandomInt } from 'file:/root/frontend-project-lvl1/src/random.js';
import { gameEngine } from 'file:/root/frontend-project-lvl1/src/index.js';
const formulateQuestion = (question) => {
  return `${question[0]}${question[1]}${question[2]}`;
}
const generateQuestion = () => { 
  const operation = ['+', '-', '*'];
  const randomIndex = getRandomInt(operation.length);
  const randomOperation = operation[randomIndex];
  const randomNumber1 = getRandomInt(50);
  const randomNumber2 = getRandomInt(20);
  const questionGame = [randomNumber1, randomOperation, randomNumber2];
  return questionGame;
}
const getCorrectAnswer = (questionGame) => { 
  if (questionGame[1] === '+') {
    return `${questionGame[0] + questionGame[2]}`;
  } 
  if (questionGame[1] === '-') {  
    return `${questionGame[0] - questionGame[2]}`;
  } 
  if (questionGame[1] === '*') {
    return `${questionGame[0] * questionGame[2]}`;
  }   
}   
const gameDescription = () => {
  return 'What is the result of the expression?';  
}
export const startGame = () => {
  gameEngine(gameDescription, generateQuestion, formulateQuestion, getCorrectAnswer);
}