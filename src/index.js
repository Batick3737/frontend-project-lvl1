import readlineSync from 'readline-sync';

export const gameEngine = (gameDescription, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  const finishGame = 2;
  const startRounds = (round = 0) => {
    const correctAnswer = generateQuestion();
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (round === finishGame) {
        console.log(`Congratulations, ${name}!`);
      } else {
        startRounds(round + 1);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${name}!`);
    }
  };
  startRounds();
};
export default gameEngine;
