import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';

const correctAnswer = (number1, number2) => {   
  var x = Math.abs(number1);
  { var y = Math.abs(number2);
  while (x && y){ x > y ? x %= y : y %= x; }
  x += y;
  }
  return `${x}`;
} 

const generateQuestion = () => { 
  const randomNumber1 = getRandomInt(1, 50);
  const randomNumber2 = getRandomInt(1, 50);
  const questionGame = `${randomNumber1} ${randomNumber2}`;
  console.log(questionGame);
  return correctAnswer(randomNumber1, randomNumber2);
}

const gameDescription = 'Find the greatest common divisor of given numbers.';

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
}