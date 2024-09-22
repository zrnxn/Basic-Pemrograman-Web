document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-answer');
    const closeButton = document.getElementById('close-popup');
    const resultPopup = document.getElementById('result-popup');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const quizAnswer = document.getElementById('quiz-answer');

    submitButton.addEventListener('click', function() {
        const answer = quizAnswer.value.trim().toLowerCase();
        let isCorrect = false;
        let message = '';

        if (answer <= 2) {
            isCorrect = true;
            message = "Boot that Console bro! Play some more games and have fun!";
        } else if (answer <= 5) {
            message = "A casual one, huh? I like it! Work hard and play hard!";
        } else if (answer <= 10) {
            message = "A hardcore gamer! I think You're a pro bro";
        } else if (answer > 10 && answer <= 24) {
            message = "I dont know what to say.. You either a Trophy Hunter or you're making good money from games! or... you didn't have a job! GET UP BRO TOUCH SOME GRASS AND TAKE A SHOWER";
        } else if (answer > 24 && answer < 69) {
            message = "Damn do you have special treatment or something? do your math and read the question again";
        } else {
            message = "I Think your IQ is -100";
        }

        resultTitle.textContent = isCorrect ? 'Gamer Yap Says:' : 'Gamer Yap Says:';
        resultMessage.textContent = message;
        resultPopup.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        resultPopup.classList.add('hidden');
        quizAnswer.value = ''; // Clear the input field
    });
});