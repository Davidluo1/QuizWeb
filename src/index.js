import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Data from "./Data";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const answerEl = document.querySelectorAll(".answer");
const quizResult = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");
const submitEl = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function select() {
  let answer = undefined;
  for (let option of answerEl) {
    if (option.checked) answer = option.id;
  }
  return answer;
  // answerEl.forEach((option) => {
  //   if (option.checked) answer = option.id;
  // });
  // return answer;
}

function loadQuiz() {
  deSelect();
  const currentQuizData = Data[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_option.innerText = currentQuizData.a;
  b_option.innerText = currentQuizData.b;
  c_option.innerText = currentQuizData.c;
  d_option.innerText = currentQuizData.d;
}

function deSelect() {
  for (let option of answerEl) {
    option.checked = false;
  }
}

submitEl.addEventListener("click", () => {
  const answer = select();
  if (answer) {
    if (answer === Data[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < Data.length) loadQuiz();
    else
      quizResult.innerHTML = `<h2>You got total of ${score} question out of ${Data.length} correct</h2>
      <button class="glow-on-hover" onclick="location.reload()">reload</button>`;
  }
});
