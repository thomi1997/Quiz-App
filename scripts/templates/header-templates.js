function renderHeaderThemes(playerProfile) {
    return /*html*/ `
<div class="header--menu">
    <label class="navigation__list-item-link" for="sidenav__opened">
        <div class="header__menu-icon">
            <img class="header__menu-img" src="../../img/burger-menu.png">
        </div>
    </label>
    <h1 onclick="init()" class="header__main">Quiz App</h1>
    <div onclick="initPlayerConfig()" class="header__user">
        <img class="header__user-img" src="../../img/players/${playerProfile}.png">
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