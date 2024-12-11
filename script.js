document.getElementById('calculateBtn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        displayResult("❓", "Please enter valid weight and height!", "", "");
        return;
    }

    const loader = document.getElementById('loader');
    loader.style.display = "block";

    setTimeout(() => {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        const calorieRequirement = Math.round(22 * (heightInMeters * heightInMeters) * 100);

        let category, emoji, advice, idealBmiRange = "18.5 - 24.9";

        if (bmi < 18.5) {
            category = "Underweight";
            emoji = "🍎";
            advice = "You are underweight. Aim for a balanced diet with more calories and strength training.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
            emoji = "👍";
            advice = "You are in a healthy range. Keep up the great work with balanced meals and exercise.";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
            emoji = "⚠️";
            advice = "You are overweight. Consider adding daily cardio and monitoring your food intake.";
        } else {
            category = "Obesity";
            emoji = "🚨";
            advice = "You are in the obesity range. Consult a healthcare provider for personalized advice.";
        }

        displayResult(
            emoji,
            `Your BMI is ${bmi} (${category})`,
            advice,
            `You should consume around ${calorieRequirement} calories per day for optimal health.`
        );

        loader.style.display = "none";
    }, 1500);
});

document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.body;
    body.toggleAttribute('data-theme');
    document.getElementById('themeToggle').textContent =
        body.hasAttribute('data-theme') ? "Switch to Day Mode" : "Switch to Night Mode";
});

function displayResult(emoji, bmiText, advice, calories) {
    document.getElementById('emoji').textContent = emoji;
    document.getElementById('bmiText').textContent = bmiText;
    document.getElementById('advice').textContent = advice;
    document.getElementById('calories').textContent = calories;
}
