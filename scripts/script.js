let questions = [];

let rightQuestions = 0;
let currentQuestion = 0;
let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/fail.mp3');


function init() {
    let quizId = document.getElementById('quiz_id');
    quizId.innerHTML = renderQuizAllThemes();
}


async function startFunAnimalsFacts() {
    let response = await fetch('./scripts/fun-animal-facts.json');
    questions = await response.json();
    let quizId = document.getElementById('quiz_id');
    quizId.innerHTML = '';
    quizId.innerHTML = renderFunAnimalsFacts();
    //console.log('Fragen', questions);
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

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


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar-id').innerHTML = `${percent} %`;
    document.getElementById('progress-bar-id').style.width = `${percent}%`;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    overlayAdd();
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        answerTrue(selection);
    } else {
        answerFalse(selection, idOfRightAnswer);
    }
    document.getElementById('next-button').disabled = false;
    overlayRemove();
}


function answerTrue(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    console.log('Richtige Antwort!!');
    audio_success.play();
    rightQuestions++;
}


function answerFalse(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    audio_fail.play();
}


function overlayAdd() {
    document.getElementById('answer_overlay').classList.add('d-none');
}


function overlayRemove() {
    document.getElementById('answer_overlay').classList.remove('d-none');
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