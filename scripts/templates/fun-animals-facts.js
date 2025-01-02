function renderFunAnimalsFacts() {
    return /*html*/ `
<div class="quiz__card">
    <h2>Lustige Tierfakten</h2>
    <div id="answer_overlay" class="answer-overlay"></div>
    <img src="img/question.jpg" id="header-image" class="question-img">
    <div class="quiz__card-progress">
        <div class="quiz__card-progress-bar" id="progress-bar-id" role="progressbar" style="width: 0%">0%</div>
    </div>
    <div class="" id="end-screen" style="display: none;">
        <div class="text-center final-headline">
            Quiz beendet!
        </div>
        <div class="">
            Du hast <b id="amount-of-right-questions">xxx</b> Fragen von <b id="amount-of-questions">xxx</b> richtig beantwortet.
        </div>
        <div class="button-row">
            <button onclick="restartGame()" class="btn btn-success">
                Erneut spielen
            </button>
        </div>
    </div>
    <div class="quiz__card-questions" id="question-body">
        <h5 class="quiz__card-questions-main" id="questiontext">Frage</h5>
        <div class="quiz__card-questions-answer" onclick="answer('answer_1')">
            <div class="quiz__card-questions-answer-main" id="answer_1">
            </div>
        </div>
        <div class="quiz__card-questions-answer" onclick="answer('answer_2')">
            <div class="quiz__card-questions-answer-main" id="answer_2">
            </div>
        </div>
        <div class="quiz__card-questions-answer" onclick="answer('answer_3')">
            <div class="quiz__card-questions-answer-main" id="answer_3">
            </div>
        </div>
        <div class="quiz__card-questions-answer" onclick="answer('answer_4')">
            <div class="quiz__card-questions-answer-main" id="answer_4">
            </div>
        </div>
        <div class="question-footer">
            <span>
                <b id="question-number">1</b> von <b id="all-questions">5</b> Fragen
            </span>
            <button onclick="nextQuestion()" class="btn btn-success" id="next-button" disabled>Nächste Frage</button>
        </div>
    </div>
</div>
`;
}