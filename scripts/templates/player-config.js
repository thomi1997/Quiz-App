function renderPlayerConfig() {
    return /*html*/ `
<div class="quiz__player">
    <label for="name">Name</label><br>
    <input type="text" id="name" placeholder="Dein Name" name="name" value=""><br>
    <div class="quiz__player-selection">
        <img onclick="selectPlayer(this)" id="player-0" class="quiz__player-selection--profile" src="../../img/players/player-0.png" alt="player">
        <img onclick="selectPlayer(this)" id="player-1" class="quiz__player-selection--profile" src="../../img/players/player-1.png" alt="player">
        <img onclick="selectPlayer(this)" id="player-2" class="quiz__player-selection--profile" src="../../img/players/player-2.png" alt="player">
        <img onclick="selectPlayer(this)" id="player-3" class="quiz__player-selection--profile" src="../../img/players/player-3.png" alt="player">
    </div>
    <button onclick="createPlayer()">Player hinzufügen!</button>
    <button onclick="deletePlayer()">Player löschen!</button>
</div>
`;
}