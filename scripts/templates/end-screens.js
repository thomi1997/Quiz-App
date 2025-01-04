function renderWinEndScreen(currentPercent) {
    return /*html*/ `
<div class="quiz__card-end" id="end-screen">
    <img class="quiz__card-end--img" src="../../img/win.png" id="header-image">
    <h2 class="quiz__card-end--title">Glückwunsch!</h2>
    <h1 class="quiz__card-end--score">${currentPercent}% Score</h1>
    <p class="quiz__card-end--main">Quiz erfolgreich beendet.</p>
    <span class="quiz__card-end--description">
        Du hast <b class="quiz__card-end-true-quest" id="amount-of-right-questions"></b> von <b class="quiz__card-end-all-quest" id="amount-of-questions"></b> richtig beantwortet.
    </span>
    <div onclick="closeInGame()" class="quiz__card-end-button">
        <img class="header__game-cross-img" src="../../img/cross-end.png" alt="">
    </div>
</div>
`;
}