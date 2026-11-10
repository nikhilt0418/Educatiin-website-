
function showMessage() {
    alert("Welcome to EduSmart!");
    alert("Start your learning journey today!");
}

var questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for web styling?",
        options: ["Python", "CSS", "C"],
        answer: 1
    },
    {
        question: "Which language is popular for AI?",
        options: ["Python", "HTML", "CSS"],
        answer: 0
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility"
        ],
        answer: 0
    },
    {
        question: "Which symbol ends a C statement?",
        options: [".", ":", ";"],
        answer: 2
    }
];

var currentQuestion = 0;
var score = 0;
var answered = false;

function loadQuestion() {
    answered = false;

    var q = questions[currentQuestion];

    document.getElementById("question").innerHTML =
        q.question;

    document.getElementById("result").innerHTML = "";

    document.getElementById("score").innerHTML =
        "Question " + (currentQuestion + 1) + " of 5";

    var optionsHTML = "";

    for (var i = 0; i < q.options.length; i++) {
        optionsHTML +=
            '<button onclick="checkAnswer(' + i + ')">' +
            q.options[i] + '</button>';
    }

    document.getElementById("options").innerHTML =
        optionsHTML;

    document.getElementById("nextBtn").style.display =
        "none";
}

function checkAnswer(selected) {
    if (answered) return;

    answered = true;

    if (selected === questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML =
            "Correct Answer!";
        document.getElementById("result").style.color =
            "green";
    } else {
        document.getElementById("result").innerHTML =
            "Wrong Answer!";
        document.getElementById("result").style.color =
            "red";
    }

    document.getElementById("nextBtn").style.display =
        "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML =
            "<h2>Quiz Completed!</h2>" +
            "<h3>Your Score: " + score + " / 5</h3>" +
            "<p>Thank you for using EduSmart!</p>";
    }
}

window.onload = loadQuestion;


function loginStudent() {
    var name = document.getElementById("studentName").value;
    var email = document.getElementById("studentEmail").value;
    var password = document.getElementById("studentPassword").value;

    var result = document.getElementById("loginResult");

    if (name === "" || email === "" || password === "") {
        result.innerHTML = "Please fill all fields!";
        result.style.color = "red";
    } 
    else {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("welcomeStudent").innerHTML =
        "Welcome, " + name + "!";
}
}

