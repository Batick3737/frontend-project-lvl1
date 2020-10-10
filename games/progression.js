import readlineSync from 'readline-sync';
export const gameProgression = () => {
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomInt2(min, max) {
  return getRandomInt(max-min) + min;
}  
const games = (round) => {
  const startProgresii = getRandomInt(20);
  const krokProgresii = getRandomInt2(2, 6);
  const dlinaProgresii = getRandomInt2(6, 11);
  const indexProgresii = getRandomInt(dlinaProgresii);
  const progression = () => {
    const masive = [];
    for (let i = 0; i < dlinaProgresii; i = i + 1) {
      const number = `${startProgresii + krokProgresii * (i - 1)}`;
      masive.push(number);
    }
    return masive;
  }
  const questionGame = progression();
  const correctAnswer = `${questionGame[indexProgresii]}`;
  questionGame[indexProgresii] = '..';
  console.log(`Question: ${questionGame}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log("Correct!");
  if (round === 2) {
    console.log(`Congratulations, ${name}!`);
    return;
  } else {
    games(round + 1);
  }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
    Let's try again, ${name}!`);
  }
    
}
console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
games(0);
}
