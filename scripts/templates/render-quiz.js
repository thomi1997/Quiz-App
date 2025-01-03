function renderQuiz() {
    return /*html*/ `
<div class="quiz__card">
    <div class="quiz__card-data">
        <span class="quiz__card-data-question-number">
            <b id="question-number"></b> von <b id="all-questions"></b> Fragen
        </span>
        <span class="quiz__card-data-time">
            <b id="quiz-time">03:00</b> min
        </span>
    </div>
    <div class="quiz__card-progress">
        <div class="quiz__card-progress-bar" id="progress-bar-id" role="progressbar" style="width: 0%">0%</div>
    </div>
    <div class="" id="end-screen" style="display: none;">
        <div class="text-center final-headline">
            Quiz beendet!
        </div>
        <div class="">
            <img src="" id="header-image">
            Du hast <b id="amount-of-right-questions">xxx</b> Fragen von <b id="amount-of-questions">xxx</b> richtig beantwortet.
        </div>
        <div class="">
            <button onclick="restartGame()" class="btn btn-success">
                Erneut spielen
            </button>
        </div>
    </div>
    <div class="quiz__card-questions" id="question-body">
        <h5 class="quiz__card-questions-main" id="questiontext">Frage</h5>
        <div id="a" class="quiz__card-questions-answer" onclick="answer('answer_1')">
            <div class="quiz__card-questions-answer-main" id="answer_1">
            </div>
        </div>
        <div id="b" class="quiz__card-questions-answer" onclick="answer('answer_2')">
            <div class="quiz__card-questions-answer-main" id="answer_2">
            </div>
        </div>
        <div id="c" class="quiz__card-questions-answer" onclick="answer('answer_3')">
            <div class="quiz__card-questions-answer-main" id="answer_3">
            </div>
        </div>
        <div id="d" class="quiz__card-questions-answer" onclick="answer('answer_4')">
            <div class="quiz__card-questions-answer-main" id="answer_4">
            </div>
        </div>
        <div class="question-footer">

            <button onclick="nextQuestion()" class="btn btn-success" id="next-button" disabled>Nächste Frage</button>
        </div>
    </div>
</div>
`;
}