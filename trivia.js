import questions from "./questions.json" assert { type: "json" }

    // I did what I can, until I realized this project requires
    // full code in jQuery... welp, here is something, but I don't 
    // expect to pass for this. I will still turn it in, as it still
    // majority of what's expected and asking, besides the jQuery and
    // disabling buttons. Thank you for the opportunity, however!

$(function(){
    const startButton = document.getElementById("startButton");
    const nextButton = document.getElementById("nextButton");
    const quizBox = document.getElementById("quizBox");
    const answerButtonsElement = document.getElementById("answerButtons");
    const button = document.querySelector("button");

    let shuffledQuestions, currentQuestion

    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", () => {
        function resetButton(classname) {
            let buttonR = document.getElementsByClassName(classname);
            while (buttonR.length) {
                buttonR[0].classList.remove(classname);
            };
        };
        resetButton("wrong");
        resetButton("correct");
        currentQuestion++;
        nextButton.classList.add("hide");
        setNextQuestion();
    });

    function startQuiz(){
        startButton.classList.add("hide");
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestion = 0;
        quizBox.classList.remove("hide");
        setNextQuestion();
    };

    function setNextQuestion() {
        showQuestion();
    };

    function showQuestion() {
        $("#questionHeader").html(questions[currentQuestion].question);
        $("#quizButton1").html(questions[currentQuestion].answers[0]);
        $("#quizButton2").html(questions[currentQuestion].answers[1]);
        $("#quizButton3").html(questions[currentQuestion].answers[2]);
        $("#quizButton4").html(questions[currentQuestion].answers[3]);
        let quizButton1 = document.getElementById("quizButton1");
        let quizButton2 = document.getElementById("quizButton2");
        let quizButton3 = document.getElementById("quizButton3");
        let quizButton4 = document.getElementById("quizButton4");
        quizButton1.addEventListener("click", () => {
            if (questions[currentQuestion].answers[0] === questions[currentQuestion].correctAnswer) {
                quizButton1.classList.add("correct");
            } else {
                quizButton1.classList.add("wrong");
            };
            if (shuffledQuestions.length > currentQuestion + 1) {
                nextButton.classList.remove("hide")
            } else {
                startButton.innerText = 'Restart'
                startButton.classList.remove("hide")
            };
            
        });
        quizButton2.addEventListener("click", () => {
            if (questions[currentQuestion].answers[1] === questions[currentQuestion].correctAnswer) {
                quizButton2.classList.add("correct");
            } else {
                quizButton2.classList.add("wrong");
            };
            if (shuffledQuestions.length > currentQuestion + 1) {
                nextButton.classList.remove("hide")
            } else {
                startButton.innerText = 'Restart'
                startButton.classList.remove("hide")
            };
        });
        quizButton3.addEventListener("click", () => {
            if (questions[currentQuestion].answers[2] === questions[currentQuestion].correctAnswer) {
                quizButton3.classList.add("correct");
            } else {
                quizButton3.classList.add("wrong");
            };
            if (shuffledQuestions.length > currentQuestion + 1) {
                nextButton.classList.remove("hide")
            } else {
                startButton.innerText = 'Restart'
                startButton.classList.remove("hide")
            };
        });
        quizButton4.addEventListener("click", () => {
            if (questions[currentQuestion].answers[3] === questions[currentQuestion].correctAnswer) {
                quizButton4.classList.add("correct");
            } else {
                quizButton4.classList.add("wrong");
            };
            if (shuffledQuestions.length > currentQuestion + 1) {
                nextButton.classList.remove("hide")
            } else {
                startButton.innerText = 'Restart'
                startButton.classList.remove("hide")
            };
        });
    }
})