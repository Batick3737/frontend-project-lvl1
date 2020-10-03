#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return "yes";
  }
  return "no";
}
const games = (round) => {
  const number = getRandomInt(100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(number);
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
console.log('Answer "yes" if the number is even, otherwise answer "no".');
games(0);