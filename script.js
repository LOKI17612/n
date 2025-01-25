// Correct answers to the quiz
let correctAnswers = [
    "office",  // Q1: Where do you see me?
    "sasirekha parinayam",  // Q2: What is our favorite movie?
    "chaitra",  // Q3: What is the name of our baby?
    "ayyapakam",  // Q4: Where did we first meet?
    "park"  // Q5:Where was our first outing?
];

// Counter to track correct answers
let correctCount = 0;

function validatePassword() {
    const enteredPassword = document.getElementById('password').value;
    const correctPassword = "iloveyou";
    const errorMessage = document.getElementById('error-message');

    if (enteredPassword === correctPassword) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
    } else {
        errorMessage.textContent = "Thikkalamma pasward curect ga vei😂😂!";
    }
}

// Use event listener for password submit button
document.getElementById("submitBtn").addEventListener("click", validatePassword);

function checkAnswers() {
    // Get the answers from input fields
    const answers = [
        document.getElementById('answer1').value.toLowerCase(),
        document.getElementById('answer2').value.toLowerCase(),
        document.getElementById('answer3').value.toLowerCase(),
        document.getElementById('answer4').value.toLowerCase(),
        document.getElementById('answer5').value.toLowerCase()
    ];

    // Reset correct count for each quiz submission
    correctCount = 0;

    // Check if each answer matches the correct answer
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            correctCount++;
        }
    }

    // If all answers are correct, show the birthday wish
    if (correctCount === correctAnswers.length) {
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('birthday-wish').style.display = 'block';
    } else {
        alert("Some answers are incorrect. Please try again!");
    }
}
