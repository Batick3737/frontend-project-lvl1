import readlineSync from 'readline-sync';
export const gameEven = () => {

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const game = (round) => {

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return "yes";
  }
  return "no";
}

const questionGame = getRandomInt(100);
console.log(`Question: ${questionGame}`);
const answer = readlineSync.question('Your answer: ');
const correctAnswer = getCorrectAnswer(questionGame);
if (answer === correctAnswer) {
  console.log("Correct!");
if (round === 2) {
  console.log(`Congratulations, ${name}!`);
return;
} else {
  game(round + 1);
}
} else {
  console.log(`${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
  Let's try again, ${name}!`);
}
}
game(0);
};