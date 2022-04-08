var startContainer = document.getElementById("start-container");
var questionContainer = document.getElementById("question-container");
var startBtn = document.getElementById("start-btn");
var highScoreForm = document.getElementById("high-score-form");
var highScoreView = document.getElementById("high-score-view");
var questionNumber = 0;

// an array of question objects
var questions = [
    {
        question: "What does null mean?",
        answer1: "a variable",
        answer2: "An absence of value",
        answer3: "An abundance of numbers",
        answer4: "A string",
        correct: "An absence of value"
    },
    {
        question: "Javascript is an _______ language?",
        answer1: "Object-Oriented",
        answer2: "Object-Based",
        answer3: "Procedural",
        answer4: "None of the above",
        correct: "Object-Oriented"
    },
    {
        question: "Which of these keywords is used to define a variable in Javascript?",
        answer1: "var",
        answer2: "let",
        answer3: "Both A & B",
        answer4: "None of the above",
        correct: "Both A & B"
    },
    {
        question: "What is a method?",
        answer1: "A function that belongs to an object",
        answer2: "An object that belongs to a function",
        answer3: "A series of strings",
        answer4: "Refers to the number 9",
        correct: "A function that belongs to an object"
    }
]

var startQuiz = function() {
    startContainer.style.display="none";
    questionContainer.style.display="block";
    // start a timer
    questionRender()
}

var questionRender = function() {
    document.getElementById("question").textContent = questions[questionNumber].question;
    document.getElementById("answer1").textContent = questions[questionNumber].answer1;
}

// function startQuiz() {}
// var startQuiz = function () {}
// const startQuiz = () => {}


// have a function that evaluates the answer the user selects
// then increments questionNumber by one then runs renderQuestion again
startBtn.addEventListener("click", startQuiz);