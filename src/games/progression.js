import { getRandomInt } from '../random.js';
import { gameEngine } from '../index.js';


const lengthProgression = getRandomInt(6, 11);


const generateQuestion = () => { 
  const startProgression = getRandomInt(0, 20);
  const stepProgression = getRandomInt(2, 6);
  const indexProgresii = getRandomInt(0, lengthProgression);
  const progression = () => {
    const masive = [];
    for (let i = 1; i < lengthProgression + 1; i = i + 1) {
      const number = `${startProgression + stepProgression * (i - 1)}`;
      masive.push(number);
    }
    return masive;
  }
  
  const questionGame = progression();
  const correctAnswer = progression();
  questionGame[indexProgresii] = '..';
  console.log(`${questionGame}`);
  return correctAnswer[indexProgresii];
}

const gameDescription = 'What number is missing in the progression?';  

export const startGame = () => {
  gameEngine(gameDescription, generateQuestion);
}

