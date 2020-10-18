import readlineSync from 'readline-sync';

export const gameEngine = (gameDescription, generateQuestion, formulateQuestion, getCorrectAnswer) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription());
  const startRounds = (round = 0) => {
    const question = generateQuestion();
    const correctAnswer = getCorrectAnswer(question);
    console.log(`Question: ${formulateQuestion(question)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log("Correct!");
      if (round === 2) {
        console.log(`Congratulations, ${name}!`);
        return;
      } else {
        startRounds(round + 1);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${name}!`);
    }   
  }
  startRounds();
}
