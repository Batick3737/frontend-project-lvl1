import readlineSync from 'readline-sync';
export const gameGcd = () => {
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const games = (round) => {
  const randomNumber1 = getRandomInt(50);
  const randomNumber2 = getRandomInt(50);
  const questionGame = `${randomNumber1} ${randomNumber2}`;
  console.log(`Question: ${questionGame}`);
  const answer = readlineSync.question('Your answer: ');
  const randomNumbers = [randomNumber1, randomNumber2];
  const getCorrectAnswer = (numbers) => {   
    var n = numbers.length, x = Math.abs(numbers[0]);
    for (var i = 1; i < n; i++)
    { var y = Math.abs(numbers[ i ]);
    while (x && y){ x > y ? x %= y : y %= x; }
    x += y;
    }
    return `${x}`;
  } 
  const correctAnswer = getCorrectAnswer(randomNumbers);
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
console.log('Find the greatest common divisor of given numbers.');
games(0);
}