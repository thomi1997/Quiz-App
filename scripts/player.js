let playerName = [];
let playerProfile = [];
let rankingPoints = [];
let completedQuestions = [];
let currentSelectionProfile = '';

function initPlayerConfig() {
    quizId.innerHTML = '';
    quizId.innerHTML = renderPlayerConfig();
}

function createPlayer() {
    let name = document.getElementById("name").value;
    if (playerName.length === 0) {
        playerName.push(name);
        playerProfile.push(currentSelectionProfile);
        rankingPoints.push(0);
        completedQuestions.push(0);
        savePlayer();
        init();
    } else {
        alert("Du kannst nur ein Player erstellen!");
    }
}


function selectPlayer(element) {
    currentSelectionProfile = element.id;
}


function savePlayer() {
    let playerNameAsText = JSON.stringify(playerName);
    localStorage.setItem('name' , playerNameAsText);
    let playerProfileAsText = JSON.stringify(playerProfile);
    localStorage.setItem('profile' , playerProfileAsText);
    let rankingPointsAsText = JSON.stringify(rankingPoints);
    localStorage.setItem('ranking' , rankingPointsAsText);
    let completedQuestionsAsText = JSON.stringify(completedQuestions);
    localStorage.setItem('questions' , completedQuestionsAsText);
}


function loadPlayer() {
    let playerNameAsText = localStorage.getItem('name');
    let playerProfileAsText = localStorage.getItem('profile');
    let rankingPointsAsText = localStorage.getItem('ranking');
    let completedQuestionsAsText = localStorage.getItem('ranking');
    if (playerNameAsText && playerProfileAsText && rankingPointsAsText && completedQuestionsAsText) {
        playerName = JSON.parse(playerNameAsText);
        playerProfile = JSON.parse(playerProfileAsText);
        rankingPoints = JSON.parse(rankingPointsAsText);
        completedQuestions = JSON.parse(completedQuestionsAsText);
    }
}


function deletePlayer() {
    playerName.splice(0, 1);
    playerProfile.splice(0, 1);
    rankingPoints.splice(0, 1);
    completedQuestions.splice(0, 1);
    savePlayer();
    init();
}