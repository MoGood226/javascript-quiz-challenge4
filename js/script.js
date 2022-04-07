var startContainer = document.getElementById("start-container");
var questionContainer = document.getElementById("question-container");
var startBtn = document.getElementById("start-btn");
var questionNumber = 0;
// finish adding variables with id's

// create an array of question objects
var questions = [
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct: ""
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