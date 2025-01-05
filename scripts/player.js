let playerName = [];
let playerProfile = [];
let rankingPoints = [];
let allRightQuestions = [];
let currentSelectionProfile = '';
let previouCurrentSelectionProfile = 'player-0';

function initPlayerConfig() {
    quizId.innerHTML = '';
    quizId.innerHTML = renderPlayerConfig();
}

function createPlayer() {
    let name = document.getElementById('name').value;
    if (playerName.length === 0) {
        pushToPlayerArrays(name);
        document.getElementById('name').value = '';
    } else {
        alert("Du kannst nur ein Player erstellen!");
    }
}


function pushToPlayerArrays(name) {
    playerName.push(name);
    playerProfile.push(currentSelectionProfile);
    rankingPoints.push(0);
    allRightQuestions.push(0);
    savePlayer();
    headerNav.innerHTML = renderHeaderThemes(playerProfile);
}


function selectPlayer(element) {
    currentSelectionProfile = element.id;
    console.log(currentSelectionProfile);
    document.getElementById(`${currentSelectionProfile}`).classList.add('selection-marker');
    if (previouCurrentSelectionProfile !== currentSelectionProfile) {
        document.getElementById(`${previouCurrentSelectionProfile}`).classList.remove('selection-marker');
        previouCurrentSelectionProfile = currentSelectionProfile;
    }
}


function savePlayer() {
    let playerNameAsText = JSON.stringify(playerName);
    let playerProfileAsText = JSON.stringify(playerProfile);
    let rankingPointsAsText = JSON.stringify(rankingPoints);
    let allRightQuestionsAsText = JSON.stringify(allRightQuestions);
    setItemsToLocalStorage(playerNameAsText, playerProfileAsText, rankingPointsAsText, allRightQuestionsAsText);
}


function setItemsToLocalStorage(playerNameAsText, playerProfileAsText, rankingPointsAsText, allRightQuestionsAsText) {
    localStorage.setItem('name' , playerNameAsText);
    localStorage.setItem('profile' , playerProfileAsText);
    localStorage.setItem('ranking' , rankingPointsAsText);
    localStorage.setItem('questions' , allRightQuestionsAsText);
}


function savePlayerPoints(rankingPoints, allRightQuestions) {
    let rankingPointsAsText = JSON.stringify(rankingPoints);
    localStorage.setItem('ranking' , rankingPointsAsText);
    let allRightQuestionsAsText = JSON.stringify(allRightQuestions);
    localStorage.setItem('questions' , allRightQuestionsAsText);
}


function loadPlayer() {
    let playerNameAsText = localStorage.getItem('name');
    let playerProfileAsText = localStorage.getItem('profile');
    let rankingPointsAsText = localStorage.getItem('ranking');
    let allRightQuestionsAsText = localStorage.getItem('questions');
    playerParse(playerNameAsText, playerProfileAsText, rankingPointsAsText, allRightQuestionsAsText);    
}


function playerParse(playerNameAsText, playerProfileAsText, rankingPointsAsText, allRightQuestionsAsText) {
    if (playerNameAsText && playerProfileAsText && rankingPointsAsText && allRightQuestionsAsText) {
        playerName = JSON.parse(playerNameAsText);
        playerProfile = JSON.parse(playerProfileAsText);
        rankingPoints = JSON.parse(rankingPointsAsText);
        allRightQuestions = JSON.parse(allRightQuestionsAsText);
    }
}


function deletePlayer() {
    playerName.splice(0, 1);
    playerProfile.splice(0, 1);
    rankingPoints.splice(0, 1);
    allRightQuestions.splice(0, 1);
    savePlayer();
    headerNav.innerHTML = renderHeaderThemes(playerUnknow);
}