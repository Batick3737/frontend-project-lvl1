import readlineSync from 'readline-sync';
export const gamePrime = () => {
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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
const games = (round) => {
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
    games(round + 1);
  }
  } else {
    console.log(`${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
    Let's try again, ${name}!`);
  }
}
console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
games(0);
}