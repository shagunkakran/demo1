const questions = [
  "Is your character real?",
  "Is your character male?",
  "Is your character from a movie?",
  "Does your character have superpowers?"
];

let current = 0;

const questionText = document.getElementById("question");
const startBtn = document.getElementById("startBtn");
const options = document.getElementById("options");
const progressBar = document.getElementById("progressBar");

startBtn.onclick = () => {
  startBtn.style.display = "none";
  options.classList.remove("hidden");
  showQuestion();
};

function showQuestion() {
  questionText.innerText = questions[current];
  progressBar.style.width = `${(current / questions.length) * 100}%`;
}

function answer(choice) {
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    progressBar.style.width = "100%";
    questionText.innerText = "I guess your character is Iron Man 😎";
    options.classList.add("hidden");
  }
}
