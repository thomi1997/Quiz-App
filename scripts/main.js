let questions = [];
let rightQuestions = 0;
let currentQuestion = 0;
let playerUnknow = 'player-unknown';
let quizTime = 1 * 60; //3 * 60
let wasRenderSideNav = false;


let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/fail.mp3');


const quizId = document.getElementById('quiz_id');
const headerNav = document.getElementById('header-nav');
const sideNav = document.getElementById('side-nav');
//const sideNavOpened = document.querySelector('.sidenav__opened');


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
    loadPlayer();
    if (playerName.length === 0) {
        headerNav.innerHTML = renderHeaderThemes(playerUnknow);
        quizId.innerHTML = renderQuizThemeMenu(0, 0);
        if (!wasRenderSideNav) {
            sideNav.innerHTML = renderSideNav(playerUnknow);
            wasRenderSideNav = true;
        } else {
            console.log("Aufgabe wurde bereits ausgeführt.");
        }
    } else if (playerName) {
        headerNav.innerHTML = renderHeaderThemes(playerProfile);
        quizId.innerHTML = renderQuizThemeMenu(allRightQuestions, rankingPoints);
        if (!wasRenderSideNav) {
            sideNav.innerHTML = renderSideNav(playerProfile);
            wasRenderSideNav = true;
        } else {
            console.log("Aufgabe wurde bereits ausgeführt.");
        }
    }
    headerNav.style='border-bottom-right-radius: 4rem; border-bottom-left-radius: 4rem';
}


async function startQuiz(element) {
    if (playerName.length > 0) {
        let id = element.id;
        await whichQuizTheme(id);
        headerNav.style='border-bottom-right-radius: 0rem; border-bottom-left-radius: 0rem';
        document.getElementById('all-questions').innerHTML = questions.length;
        showQuestion();
    } else {
        alert("Füge bitte einen Player hinzu!");
    }
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
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_1(id) {
    if (id == 1) {
        quizTime = quizTime + 1 * 60;
        await loadQuestions(urlEmbarrassingMomentsInEverydayLife);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_2(id) {
    if (id == 2) {
        quizTime = quizTime + 2 * 60;
        await loadQuestions(urlStrangeEatingHabits);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_3(id) {
    if (id == 3) {
        quizTime = quizTime + 3 * 60;
        await loadQuestions(urlMovieAndSeriesParodies);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_4(id) {
    if (id == 4) {
        quizTime = quizTime + 4 * 60;
        await loadQuestions(urlUselessKnowledge);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_5(id) {
    if (id == 5) {
        quizTime = quizTime + 5 * 60;
        await loadQuestions(urlSuperheroesOnTheWrongTrack);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_6(id) {
    if (id == 6) {
        quizTime = quizTime + 6 * 60;
        await loadQuestions(urlMishapsInTheKitchen);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_7(id) {
    if (id == 7) {
        quizTime = quizTime + 7 * 60;
        await loadQuestions(urlStrangeInventions);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_8(id) {
    if (id == 8) {
        quizTime = quizTime + 8 * 60;
        await loadQuestions(urlUnexpectedFactsAboutCelebrities);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
    }
}


async function renderQuizTheme_9(id) {
    if (id == 9) {
        quizTime = quizTime + 9 * 60;
        await loadQuestions(urlFunnyThingsThatChildrenBelieve);
        clearQuizAndNav();
        renderQuizAndNav();
        timerRunning = true;
        startCounter(quizTime);
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