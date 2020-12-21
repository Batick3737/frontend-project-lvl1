import readlineSync from 'readline-sync';

export const gameEngine = (gameDescription, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  const amountOfRounds = 3;
  const startGame = (round = 1) => {
    const [gameQuestion, correctAnswer] = generateQuestionAndAnswer();
    console.log(gameQuestion);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (round >= amountOfRounds) {
        console.log(`Congratulations, ${name}!`);
        return;
      } startGame(round + 1);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${name}!`);
    }
  };
  startGame();
};
export default gameEngine;
