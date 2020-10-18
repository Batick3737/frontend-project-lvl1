import { getRandomInt } from 'file:/root/frontend-project-lvl1/src/random.js';
import { gameEngine } from 'file:/root/frontend-project-lvl1/src/index.js';

const formulateQuestion = (question) => {
  return `${question[0]} ${question[1]}`;
}
const generateQuestion = () => { 
  const randomNumber1 = getRandomInt(50);
  const randomNumber2 = getRandomInt(50);
  const questionGame = [randomNumber1, randomNumber2];
  return questionGame;
}
const getCorrectAnswer = (numbers) => {   
  var n = numbers.length, x = Math.abs(numbers[0]);
  for (var i = 1; i < n; i++)
  { var y = Math.abs(numbers[ i ]);
  while (x && y){ x > y ? x %= y : y %= x; }
  x += y;
  }
  return `${x}`;
} 
const gameDescription = () => {
  return 'Find the greatest common divisor of given numbers.';
}
export const startGame = () => {
  gameEngine(gameDescription, generateQuestion, formulateQuestion, getCorrectAnswer);
}