function renderPlayerConfig() {
    return /*html*/ `
<div class="quiz__player">
    <div class="quiz__player--input-box">
        <label class="quiz__player-input-main" for="name">Name:</label>
        <input class="quiz__player-input-name" type="text" id="name" placeholder="Dein Name" name="name" value=""><br>
    </div>
    <div class="quiz__player-selection">
        <img onclick="selectPlayer(this)" id="player-0" class="quiz__player-selection--profile" src="../../img/players/player-0.png" alt="player">
        <img onclick="selectPlayer(this)" id="player-1" class="quiz__player-selection--profile" src="../../img/players/player-1.png" alt="player">
        <img onclick="selectPlayer(this)" id="player-2" class="quiz__player-selection--profile" src="../../img/players/player-2.png" alt="player">
        <img onclick="selectPlayer(this)" id="player-3" class="quiz__player-selection--profile" src="../../img/players/player-3.png" alt="player">
    </div>
    <div class="quiz__player--box">
        <button onclick="createPlayer()" class="quiz__player-btn"><span class="quiz__player-btn-main">Player hinzufügen!</span></button>
        <button onclick="deletePlayer()" class="quiz__player-btn"><span class="quiz__player-btn-main">Player löschen!</span></button>
    </div>
</div>
`;
}