import { getRandomInt } from 'file:/root/frontend-project-lvl1/src/random.js';
import { gameEngine } from 'file:/root/frontend-project-lvl1/src/index.js';
const getRandomInt2 = (min, max) => {
  return getRandomInt(max-min) + min;
}  

const lengthProgression = getRandomInt2(6, 11);
const indexProgresii = getRandomInt(lengthProgression);

const formulateQuestion = (question) => {
  question[indexProgresii] = '..';
  return `${question}`;
}
const generateQuestion = () => { 
  const startProgression = getRandomInt(20);
  const stepProgression = getRandomInt2(2, 6);
  const progression = () => {
    const masive = [];
    for (let i = 0; i < lengthProgression; i = i + 1) {
      const number = `${startProgression + stepProgression * (i - 1)}`;
      masive.push(number);
    }
    return masive;
  }
  const questionGame = progression();
  return questionGame;
}
const getCorrectAnswer = (question) => {
  return question[indexProgresii];
}
const gameDescription = () => {
  return 'What number is missing in the progression?';  
}
export const startGame = () => {
  gameEngine(gameDescription, generateQuestion, formulateQuestion, getCorrectAnswer);
}

