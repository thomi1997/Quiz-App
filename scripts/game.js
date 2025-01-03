function showQuestion() {
    if (gameIsOver()) {
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
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    aktiveAnswers();
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar-id').innerHTML = `${percent} %`;
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
    document.getElementById(selection).parentNode.classList.add('bg-success');
    disableAnswers();
    //audio_success.play();
    rightQuestions++;
}


function answerFalse(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    disableAnswers();
    //audio_fail.play();
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
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/question.jpg';
    document.getElementById('question-body').style = ''; // questionbody wieder anzeigen
    document.getElementById('end-screen').style = 'display: none'; // Endscreen ausblenden
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}


function closeInGame() {
    quizId.innerHTML = '';
    headerNav.innerHTML = '';
    init();
}