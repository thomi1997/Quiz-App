function renderQuizAllThemes() {
    return /*html*/ `
<div class="quiz__count">
    <div class="quiz__count-counter">
        <p class="quiz__count-counter-main">Question Count</p>
        <span class="quiz__count-counter-number">456</span>
    </div>
    <div class="quiz__count-ranking">
        <p class="quiz__count-ranking-main">Your Ranking</p>
        <span class="quiz__count-ranking-number">456</span>
    </div>
</div>
<div class="quiz__themes">
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/animals.png">
        <span class="quiz__themes-button-main">Lustige Tierfakten</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/oops.png">
        <span class="quiz__themes-button-main">Peinliche Momente im Alltag</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/essgewohnheiten.png">
        <span class="quiz__themes-button-main">Seltsame Essensgewohnheiten</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/movie-cat.png">
        <span class="quiz__themes-button-main">Film- und Serienparodien</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/useless-knowledge.png">
        <span class="quiz__themes-button-main">Unnützes Wissen</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/super-heros.png">
        <span class="quiz__themes-button-main">Superhelden auf Abwegen</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/kitchen-mishap.png">
        <span class="quiz__themes-button-main">Missgeschicke in der Küche</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/strange-inventions.png">
        <span class="quiz__themes-button-main">Merkwürdige Erfindungen</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/celebrities.png">
        <span class="quiz__themes-button-main">Unerwartete Fakten über Berühmtheiten</span>
    </button>
    <button onclick="startFunAnimalsFacts()" class="quiz__themes-button">
        <img class="quiz__themes-img" src="../../img/themes/funny-things.png">
        <span class="quiz__themes-button-main">Lustige Dinge, die Kinder glauben</span>
    </button>
</div>`;
}