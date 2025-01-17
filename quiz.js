// Define the function to check the answer
function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4"; // Replace with the correct answer for your quiz

    // Step 2: Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Step 3: Get the feedback element
    const feedback = document.getElementById("feedback");

    // Step 4: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Display correct answer feedback
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        // Display incorrect answer feedback
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add an event listener to the Submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);