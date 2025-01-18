let currentPercent = 0;
let currentPoints = 0;


function showQuestion() {
    if (quizCompleted()) {
        updateProgressBar();
        showEndScreen();
    } else {
        updateToNextQuestion();
        updateProgressBar();
    }
}


function quizCompleted() {
    return currentQuestion >= questions.length;
}


function showGameOverScreen() {
    headerNav.classList.add('d-none');
    quizId.innerHTML = renderGameOverScreen(currentPercent);
}


function showEndScreen() {
    quizId.innerHTML = '';
    headerNav.classList.add('d-none');
    quizId.innerHTML = renderWinEndScreen(currentPercent);
    document.getElementById('amount-of-questions').innerHTML = `${questions.length} Fragen`;
    document.getElementById('amount-of-right-questions').innerHTML = `${rightQuestions} Fragen`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number-1').innerHTML = currentQuestion + 1;
    document.getElementById('question-number-2').innerHTML = `${currentQuestion + 1}.`;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    aktiveAnswers();
}


function updateProgressBar() {
    let percent = (currentQuestion) / questions.length;
    percent = Math.round(percent * 100);
    currentPercent = percent;
    document.getElementById('progress-bar-number').innerHTML = `${percent} %`;
    document.getElementById('progress-bar-id').style.width = `${percent}%`;
}

//antwort wird ausgewählt!
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    ratedAnswer(selection, question, selectedQuestionNumber, idOfRightAnswer);
    document.getElementById('next-button').disabled = false;
    document.getElementById('next-button').style="opacity: 1;";
    document.getElementById('next-button').classList.add('quiz__card-next-btn-hover');
}


function ratedAnswer(selection, question, selectedQuestionNumber, idOfRightAnswer) {
    if (selectedQuestionNumber == question['right_answer']) {
        answerTrue(selection, idOfRightAnswer);
        currentPoints = currentPoints + 2;
        disableAnswers();
    } else {
        answerFalse(selection, idOfRightAnswer);
        disableAnswers();
    }
}


function answerTrue(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('color-bright-grey');
    const answerElement = document.getElementById(selection);
    const parentElement = answerElement.closest('.quiz__card-answers');
    const parentId = parentElement.id;
    document.getElementById(`letter-icon-${parentId}`).classList.add('move-icon');
    document.getElementById(`icon-bg-${parentId}`).style="background-color: rgb(204, 219, 232)";
    getParentTrueId(idOfRightAnswer)
    audio_success.play();
    rightQuestions++;
}


function answerFalse(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('color-bright-grey');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('color-bright-grey');
    getParentTrueId(idOfRightAnswer);
    getParentFalseId(selection);
    audio_fail.play();
}


function getParentTrueId(idOfRightAnswer) {
    const answerTrueElement = document.getElementById(idOfRightAnswer);
    const parentTrueElement = answerTrueElement.closest('.quiz__card-answers');
    const parentIdTrue = parentTrueElement.id;
    document.getElementById(`letter-icon-${parentIdTrue}`).classList.add('move-icon');
    document.getElementById(`icon-bg-${parentIdTrue}`).style="background-color: rgb(204, 219, 232)";
    document.getElementById(`icon-bg-${parentIdTrue}`).style="background-color: rgb(204, 219, 232)";
    document.getElementById(`icon-${parentIdTrue}`).src="../img/true-icon.png";

}

function getParentFalseId(selection) {
    const answerElement = document.getElementById(selection);
    const parentElement = answerElement.closest('.quiz__card-answers');
    const parentId = parentElement.id;
    document.getElementById(`letter-icon-${parentId}`).classList.add('move-icon');
    document.getElementById(`icon-bg-${parentId}`).style="background-color: rgb(204, 219, 232)";
    document.getElementById(`icon-${parentId}`).src="../img/false-icon.png";
}


function aktiveAnswers() {
    document.getElementById('a').style.pointerEvents = "auto";
    document.getElementById('b').style.pointerEvents = "auto";
    document.getElementById('c').style.pointerEvents = "auto";
    document.getElementById('d').style.pointerEvents = "auto";
}


function disableAnswers() {
    document.getElementById('a').style.pointerEvents = "none";
    document.getElementById('b').style.pointerEvents = "none";
    document.getElementById('c').style.pointerEvents = "none";
    document.getElementById('d').style.pointerEvents = "none";
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    document.getElementById('next-button').style="opacity: 0.8;";
    document.getElementById('next-button').classList.remove('quiz__card-next-btn-hover');
    resetAnswerStructure();
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerStructure() {
    document.getElementById('letter-icon-a').classList.remove('move-icon');
    document.getElementById('letter-icon-b').classList.remove('move-icon');
    document.getElementById('letter-icon-c').classList.remove('move-icon');
    document.getElementById('letter-icon-d').classList.remove('move-icon');
    document.getElementById('icon-bg-a').style="background-color: rgb(231, 130, 48)";
    document.getElementById('icon-bg-b').style="background-color: rgb(231, 130, 48)";
    document.getElementById('icon-bg-c').style="background-color: rgb(231, 130, 48)";
    document.getElementById('icon-bg-d').style="background-color: rgb(231, 130, 48)";
    document.getElementById('icon-a').src="../img/letter-A.png";
    document.getElementById('icon-b').src="../img/letter-B.png";
    document.getElementById('icon-c').src="../img/letter-C.png";
    document.getElementById('icon-d').src="../img/letter-D.png";
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('color-bright-grey');
    document.getElementById('answer_2').parentNode.classList.remove('color-bright-grey');
    document.getElementById('answer_3').parentNode.classList.remove('color-bright-grey');
    document.getElementById('answer_4').parentNode.classList.remove('color-bright-grey');
}


function closeInGame() {
    if (currentQuestion == questions.length) {
        pushAndSplicePoints();
    }
    headerNav.classList.remove('d-none');
    rightQuestions = 0;
    currentQuestion = 0;
    currentPoints = 0;
    quizTime = 1 * 60;
    timerRunning = false;
    init();
}


function pushAndSplicePoints() {
    let points = rankingPoints[0] + currentPoints;
    rankingPoints.push(points);
    rankingPoints.splice(0, 1);
    let allQuestions = allRightQuestions[0] + rightQuestions;
    allRightQuestions.push(allQuestions);
    allRightQuestions.splice(0, 1);
    savePlayerPoints(rankingPoints, allRightQuestions);
}