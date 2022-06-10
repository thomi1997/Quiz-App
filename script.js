let questions = [
    {
        "question": "Was hält die Freiheitsstatue in ihrer linken Hand?",
        "answer_1": "Eine Fackel",
        "answer_2": "Ein Kürbis",
        "answer_3": "Eine Tabula ansata mit dem Datum der amerikanischen Unabhängigkeitserklärung",
        "answer_4": "Ein Brett",
        "right_answer": 3
    },
    {
        "question": "Von wann bis wann dauerte der erste Weltkrieg?",
        "answer_1": "1655 – 1699",
        "answer_2": "1914 – 1918",
        "answer_3": "1875 – 1878",
        "answer_4": "1722 – 1733",
        "right_answer": 2
    },
    {
        "question": "An welchem Datum fiel die Berliner Mauer?",
        "answer_1": "8. November 1980",
        "answer_2": "5. November 1969",
        "answer_3": "15. November 1975",
        "answer_4": "9. November 1989",
        "right_answer": 4
    },
    {
        "question": "Wie viele Planeten gehören zu unserem Sonnensystem?",
        "answer_1": "8",
        "answer_2": "5",
        "answer_3": "9",
        "answer_4": "12",
        "right_answer": 1
    },
    {
        "question": "Wie heißt der freche Kobold von Meister Eder?",
        "answer_1": "Winnie Puuh",
        "answer_2": "Pumuckl",
        "answer_3": "Mickie Maus",
        "answer_4": "Donald Duck",
        "right_answer": 2
    },
    {
        "question": "Süßes oder Saures“, wann benutzt man diesen Spruch?",
        "answer_1": "Weihnachten",
        "answer_2": "Ostern",
        "answer_3": "Halloween",
        "answer_4": "Pfingsten",
        "right_answer": 3
    },
    {
        "question": "Wie viele Minuten hat eine Stunde?",
        "answer_1": "45",
        "answer_2": "70",
        "answer_3": "57",
        "answer_4": "60",
        "right_answer": 4
    }
];

let rightQuestions = 0;
let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if(currentQuestion >= questions.length) {
        //TODO: Show End Screen
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/win.png';
    }else {
        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) { // Richitge Frage beantwortet !
        document.getElementById(selection).parentNode.classList.add('bg-success');
        console.log('Richtige Antwort!!');
        rightQuestions++;
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        console.log('Falsche Antwort!!');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // z.B von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}