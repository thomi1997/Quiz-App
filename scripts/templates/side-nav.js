function showImprint() {
    quizId.innerHTML = '';
    quizId.innerHTML = renderImprint();
}

function showDataPrivacy() {
    quizId.innerHTML = '';
    quizId.innerHTML = renderDataPrivacy();
}


function renderSideNav(playerProfile) {
    return /*html*/ `
<label for="sidenav__opened" class="sidenav__background"></label>
<div class="sidenav__container">
    <label for="sidenav__opened" class="sidenav__close">X</label>
    <nav>
        <img class="sidenav__img" src="../../img/players/${playerProfile}.png">
        <ul class="sidenav__nav">
            <li>
                <label onclick="init()" for="sidenav__opened" class="sidenav__nav-link">
                    Startseite
                </label>
            </li>
            <li>
                <label onclick="initPlayerConfig()" for="sidenav__opened" class="sidenav__nav-link">
                    Spieler anlegen
                </label>
            </li>
            <li>
                <label onclick="showImprint()" for="sidenav__opened" class="sidenav__nav-link">
                    Impressum
                </label>
            </li>
            <li>
                <label onclick="showDataPrivacy()" for="sidenav__opened" class="sidenav__nav-link">
                    Datenschutz
                </label>
            </li>
        </ul>
    </nav>
</div>
`;
}