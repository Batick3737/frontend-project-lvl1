import readlineSync from 'readline-sync';
export const gameCalc = () => { 
  const games = (round) => { 
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const operation = ['+', '-', '*'];
const randomIndex = getRandomInt(operation.length);
const randomOperation = operation[randomIndex];
const randomNumber1 = getRandomInt(50);
const randomNumber2 = getRandomInt(20);
const questionGame = `${randomNumber1}${randomOperation}${randomNumber2}`;
console.log(`Question: ${questionGame}`);
const answer = readlineSync.question('Your answer: ');
const getCorrectAnswer = () => {
  if (randomOperation === '+') {
    return `${randomNumber1 + randomNumber2}`;
  } 
  if (randomOperation === '-') {  
    return `${randomNumber1 - randomNumber2}`;
  } 
  if (randomOperation === '*') {
    return `${randomNumber1 * randomNumber2}`;
  }
}
const correctAnswer = getCorrectAnswer();
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
  console.log('What is the result of the expression?');
  games(0);
}
