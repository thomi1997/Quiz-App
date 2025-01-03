function showQuestion() {
    if (gameIsOver()) {
        updateProgressBar();
        showEndScreen();
    } else {
        updateToNextQuestion();
        updateProgressBar();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/win.png';
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
}


function ratedAnswer(selection, question, selectedQuestionNumber, idOfRightAnswer) {
    if (selectedQuestionNumber == question['right_answer']) {
        answerTrue(selection);
    } else {
        answerFalse(selection, idOfRightAnswer);
    }
}


function answerTrue(selection) {
    document.getElementById(selection).parentNode.classList.add('color-bright-grey');
    const answerElement = document.getElementById(selection);
    const parentElement = answerElement.closest('.quiz__card-answers');
    const parentId = parentElement.id;
    document.getElementById(`letter-icon-${parentId}`).classList.add('move-icon');
    document.getElementById(`icon-bg-${parentId}`).style="background-color: rgb(204, 219, 232)";

    disableAnswers();
    //audio_success.play();
    rightQuestions++;
}


function answerFalse(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('color-bright-grey');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('color-bright-grey');
    getParentTrueId(idOfRightAnswer);
    getParentFalseId(selection);
    disableAnswers();
    //audio_fail.play();
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
    
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('color-bright-grey');
    document.getElementById('answer_2').parentNode.classList.remove('color-bright-grey');
    document.getElementById('answer_3').parentNode.classList.remove('color-bright-grey');
    document.getElementById('answer_4').parentNode.classList.remove('color-bright-grey');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/question.jpg';
    document.getElementById('question-body').style = '';
    document.getElementById('end-screen').style = 'display: none';
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}


function closeInGame() {
    quizId.innerHTML = '';
    headerNav.innerHTML = '';
    init();
}