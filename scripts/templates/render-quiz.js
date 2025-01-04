function renderQuiz() {
    return /*html*/ `
<div class="quiz__card">
    <div class="quiz__card-data">
        <span class="quiz__card-data-question-number">
            <b id="question-number-1"></b> von <b id="all-questions"></b> Fragen
        </span>
        <span class="quiz__card-data-time">
            <b id="quiz-time">03:00</b> min
        </span>
    </div>
    <div class="quiz__card-progress">
        <div class="quiz__card-progress-bar" id="progress-bar-id" role="progressbar">
            <b class="quiz__card-progress-bar-number" id="progress-bar-number">0%</b>
        </div>
    </div>
    <div class="quiz__card-body" id="question-body">
        <div class="quiz__card-question">
            <h2 class="quiz__card-question-number" id="question-number-2"></h2>
            <h2 class="quiz__card-question-main" id="question-text">Frage</h2>
        </div>
        <div id="a" class="quiz__card-answers" onclick="answer('answer_1')">
            <div class="quiz__card-answers-letter-frame">
                <img class="quiz__card-answers--letter-icon" src="../../img/letter-A.png" alt="letter-A">
            </div>
            <div class="quiz__card-answers--bg" id="letter-icon-a">
                <div class="quiz__card-answers-icon-bg" id="icon-bg-a">
                    <img id="icon-a" class="quiz__card-answers--true-false-icon" src="" alt="">
                </div>
            </div>
            <div class="quiz__card-answers-main" id="answer_1">
            </div>
        </div>
        <div id="b" class="quiz__card-answers" onclick="answer('answer_2')">
            <div class="quiz__card-answers-letter-frame">
                <img class="quiz__card-answers--letter-icon" src="../../img/letter-B.png" alt="letter-B">
            </div>
            <div class="quiz__card-answers--bg" id="letter-icon-b">
                <div class="quiz__card-answers-icon-bg" id="icon-bg-b">
                    <img id="icon-b" class="quiz__card-answers--true-false-icon" src="" alt="">
                </div>
            </div>
            <div class="quiz__card-answers-main" id="answer_2">
            </div>
        </div>
        <div id="c" class="quiz__card-answers" onclick="answer('answer_3')">
            <div class="quiz__card-answers-letter-frame">
                <img class="quiz__card-answers--letter-icon" src="../../img/letter-C.png" alt="letter-C">
            </div>
            <div class="quiz__card-answers--bg" id="letter-icon-c">
                <div class="quiz__card-answers-icon-bg" id="icon-bg-c">
                    <img id="icon-c" class="quiz__card-answers--true-false-icon" src="" alt="">
                </div>
            </div>
            <div class="quiz__card-answers-main" id="answer_3">
            </div>
        </div>
        <div id="d" class="quiz__card-answers" onclick="answer('answer_4')">
            <div class="quiz__card-answers-letter-frame">
                <img class="quiz__card-answers--letter-icon" src="../../img/letter-D.png" alt="letter-D">
            </div>
            <div class="quiz__card-answers--bg" id="letter-icon-d">
                <div class="quiz__card-answers-icon-bg" id="icon-bg-d">
                    <img id="icon-d" class="quiz__card-answers--true-false-icon" src="" alt="">
                </div>
            </div>
            <div class="quiz__card-answers-main" id="answer_4">
            </div>
        </div>
        <button onclick="nextQuestion()" class="quiz__card-next-btn" id="next-button" disabled>Nächste Frage</button>
    </div>
</div>
`;
}