function renderHeaderThemes() {
    return /*html*/ `
<div class="header--menu">
    <div class="header__menu-icon">
        <img class="header__menu-img" src="../../img/burger-menu.png">
    </div>
    <h1 class="header__main">Quiz App</h1>
    <div class="header__user">
        <img class="header__user-img" src="../../img/user.png">
    </div>
</div>
`;
}


function renderHeaderGame(title) {
    return /*html*/ `
<div class="header--game">
    <h1 class="header__game-main">${title}</h1>
    <div onclick="closeInGame()" class="header__game-button-close">
        <img class="header__game-cross-img" src="../../img/cross.png" alt="">
    </div>
</div>
`;
}