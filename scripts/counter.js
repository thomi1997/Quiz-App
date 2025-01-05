let timerRunning = false;

function startCounter(quizTime) {
    const countdownDisplay = document.getElementById('quiz-time');
    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function updateCountdown() {
        if (!timerRunning) {
            clearInterval(countdownInterval);
            return;
        }
        countdownDisplay.textContent = formatTime(quizTime);
        if (quizTime > 0) {
            quizTime--;
        } else {
            showGameOverScreen();
            clearInterval(countdownInterval);
            timerRunning = false;
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}