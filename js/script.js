var startContainer = document.getElementById("start-container");
var questionContainer = document.getElementById("question-container");
var startBtn = document.getElementById("start-btn");
var highScoreForm = document.getElementById("high-score-form");
var highScoreView = document.getElementById("high-score-view");
var timerEl = document.getElementById("timer");
var highScoreBtnEl = document.getElementById("high-score-btn");
var initialsEl = document.getElementById("initials");
var questionNumber = 0;
var timerId;

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

var time = questions.length * 20;

var clockTick = function () {
    //update time
    time--;
    //update timer display
    timerEl.textContent = time;
    //check if timer has ended
    if (time <= 0) {
        endQuiz();
    }
}

var startQuiz = function () {
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    // start a timer
    timerId = setInterval(clockTick, 1000);

    questionRender();
}

var questionRender = function () {
    document.getElementById("question").textContent = questions[questionNumber].question;
    document.getElementById("answer1").textContent = questions[questionNumber].answer1;
    document.getElementById("answer2").textContent = questions[questionNumber].answer2;
    document.getElementById("answer3").textContent = questions[questionNumber].answer3;
    document.getElementById("answer4").textContent = questions[questionNumber].answer4;
}

var saveHighScore = function () {
    highScoreBtnEl.addEventListener("click", function (event) {
        event.preventDefault();

        highScoreForm.style.display = "none";

        highScoreView.style.display = "block";
        //get the saved scores from local storage, or if there are no scores already, create an empty array.
        //create new score object based on the current users score.
        //Save the new score object to local storage.
        //display the high scores

    })
}

var endQuiz = function () {
    //end timer
    clearInterval(timerId);
    //clear display of question container
    questionContainer.style.display = "none";
    //show the "End" screen (form to enter initails for board) and final score (stop timer)
    highScoreForm.style.display = "block";

    saveHighScore();
}


startBtn.addEventListener("click", startQuiz);

document.querySelectorAll('.answer-btn').forEach(currentBtn => {
    currentBtn.addEventListener('click', event => {
        //checking if answer is correct.
        console.log(event.target.textContent);
        if (questions[questionNumber].correct === event.target.textContent) {
            alert("Correct!!!");
            console.log("correct");
        } else {
            alert("Incorrect!! Lose 10 seconds!!");
            time -= 10;
            console.log("wrong");
        }

        //checking if it's the end of the quiz.
        //if not, get and display the next set of questions.
        if (questionNumber === questions.length - 1) {
            endQuiz();
        } else {
            questionNumber++;
            questionRender();
        }
    })
})