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
let urlMovieAndSeriesParodies = './scripts/questions/movie-and-series-parodies.json';
let urlUselessKnowledge = './scripts/questions/useless-knowledge.json';
let urlSuperheroesOnTheWrongTrack = './scripts/questions/superheroes-on-the-wrong-track.json';
let urlMishapsInTheKitchen = './scripts/questions/mishaps-in-the-kitchen.json';
let urlStrangeInventions = './scripts/questions/strange-inventions.json';
let urlUnexpectedFactsAboutCelebrities = './scripts/questions/unexpected-facts-about-celebrities.json';
let urlFunnyThingsThatChildrenBelieve = './scripts/questions/funny-things-that-children-believe.json';


function init() {
    quizId.innerHTML = renderQuizThemeMenu();
    headerNav.innerHTML = renderHeaderThemes();
    headerNav.style='border-bottom-right-radius: 4rem; border-bottom-left-radius: 4rem';
}


async function startQuiz(element) {
    let id = element.id;
    await whichQuizTheme(id);
    headerNav.style='border-bottom-right-radius: 0rem; border-bottom-left-radius: 0rem';
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


async function  whichQuizTheme(id) {
    await renderQuizTheme_0(id);
    await renderQuizTheme_1(id);
    await renderQuizTheme_2(id);
    await renderQuizTheme_3(id);
    await renderQuizTheme_4(id);
    await renderQuizTheme_5(id);
    await renderQuizTheme_6(id);
    await renderQuizTheme_7(id);
    await renderQuizTheme_8(id);
    await renderQuizTheme_9(id);
}


async function renderQuizTheme_0(id) {
    if (id == 0) {
        await loadQuestions(urlFunAnimalFacts);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_1(id) {
    if (id == 1) {
        await loadQuestions(urlEmbarrassingMomentsInEverydayLife);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_2(id) {
    if (id == 2) {
        await loadQuestions(urlStrangeEatingHabits);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_3(id) {
    if (id == 3) {
        await loadQuestions(urlMovieAndSeriesParodies);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_4(id) {
    if (id == 4) {
        await loadQuestions(urlUselessKnowledge);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_5(id) {
    if (id == 5) {
        await loadQuestions(urlSuperheroesOnTheWrongTrack);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_6(id) {
    if (id == 6) {
        await loadQuestions(urlMishapsInTheKitchen);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_7(id) {
    if (id == 7) {
        await loadQuestions(urlStrangeInventions);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_8(id) {
    if (id == 8) {
        await loadQuestions(urlUnexpectedFactsAboutCelebrities);
        clearQuizAndNav();
        renderQuizAndNav();
    }
}


async function renderQuizTheme_9(id) {
    if (id == 9) {
        await loadQuestions(urlFunnyThingsThatChildrenBelieve);
        clearQuizAndNav();
        renderQuizAndNav();
    }
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
    let questionNumber = currentQuestion + 1;
    quizId.innerHTML = renderQuiz(questionNumber);
    headerNav.innerHTML = renderHeaderGame(title);
}