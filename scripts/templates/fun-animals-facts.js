function renderFunAnimalsFacts() {
    return /*html*/ `
<div class="card quiz-card">
    <div id="answer_overlay" class="answer-overlay"></div>
    <img src="img/question.jpg" id="header-image" class="question-img">
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" id="progress-bar-id" role="progressbar" style="width: 0%">0%</div>
    </div>
    <div class="card-body" id="end-screen" style="display: none;">
        <div class="text-center final-headline">
            Quiz beendet!
        </div>
        <div class="text-center">
            Du hast <b id="amount-of-right-questions">xxx</b> Fragen von <b id="amount-of-questions">xxx</b> richtig beantwortet.
        </div>
        <div class="button-row">
            <button onclick="restartGame()" class="btn btn-success">
                Erneut spielen
            </button>
        </div>
    </div>
    <div class="card-body" id="question-body">
        <h5 class="card-title" id="questiontext">Frage</h5>
        <div class="card quiz-answer-card mb-2" onclick="answer('answer_1')">
            <div class="card-body" id="answer_1">
            </div>
        </div>
        <div class="card quiz-answer-card mb-2" onclick="answer('answer_2')">
            <div class="card-body" id="answer_2">
            </div>
        </div>
        <div class="card quiz-answer-card mb-2" onclick="answer('answer_3')">
            <div class="card-body" id="answer_3">
            </div>
        </div>
        <div class="card quiz-answer-card mb-2" onclick="answer('answer_4')">
            <div class="card-body" id="answer_4">
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
</div>
`;
}