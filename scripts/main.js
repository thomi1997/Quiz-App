let questions = [];
let rightQuestions = 0;
let currentQuestion = 0;

let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/fail.mp3');

const quizId = document.getElementById('quiz_id');
const headerNav = document.getElementById('header-nav');

let urlFunAnimalFacts = './scripts/questions/fun-animal-facts.json';
let urlEmbarrassingMomentsInEverydayLife = './scripts/questions/embarrassing-moments-in-everyday-life.json';
let urlStrangeEatingHabits = './scripts/questions/strange-eating-habits.json';


function init() {
    quizId.innerHTML = renderQuizThemeMenu();
    headerNav.innerHTML = renderHeaderThemes();
    headerNav.style='border-bottom-right-radius: 4rem; border-bottom-left-radius: 4rem';
    //startQuiz(0);
}


async function startQuiz(element) {
    if (element.id == 0) {
        await loadQuestions(urlFunAnimalFacts);
        clearQuizAndNav();
        renderQuizAndNav();
    }

    if (element.id == 1) {
        await loadQuestions(urlEmbarrassingMomentsInEverydayLife);
        clearQuizAndNav();
        renderQuizAndNav();
    }

    if (element.id == 2) {
        await loadQuestions(urlStrangeEatingHabits);
        clearQuizAndNav();
        renderQuizAndNav();
    }
    headerNav.style='border-bottom-right-radius: 0rem; border-bottom-left-radius: 0rem';
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


async function loadQuestions(url) {
    let response = await fetch(url);
    questions = await response.json();
}


function clearQuizAndNav() {
    quizId.innerHTML = '';
    headerNav.innerHTML = '';
}

function renderQuizAndNav() {
    let title = questions[0].title;
    quizId.innerHTML = renderQuiz();
    headerNav.innerHTML = renderHeaderGame(title);
}