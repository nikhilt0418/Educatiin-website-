
function showMessage() {
    alert("Welcome to EduSmart!");
    alert("Start your learning journey today!");
}

function checkAnswer(answer) {
    var result = document.getElementById("result");

    if (answer === 0) {
        result.innerHTML = "Correct Answer! Well Done!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Wrong Answer! Try Again.";
        result.style.color = "red";
    }
}
