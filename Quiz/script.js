const quizData = [
    {
        question: "Who is the president of India",
        a: "Ramnath Kovind",
        b: "Narendra Modi",
        c: "JP Nadda",
        d: "Amit Shah",
        correct: "a"
    },
    {
        question: "Who is the Prime Minster of India",
        a: "Ramnath Kovind",
        b: "Narendra Modi",
        c: "JP Nadda",
        d: "Amit Shah",
        correct: "b"
    },
    {
        question: "Who is the president of BJP",
        a: "Ramnath Kovind",
        b: "Narendra Modi",
        c: "JP Nadda",
        d: "Amit Shah",
        correct: "c"
    },
    {
        question: "Who is the Home Minister of India",
        a: "Ramnath Kovind",
        b: "Narendra Modi",
        c: "JP Nadda",
        d: "Amit Shah",
        correct: "d"
    },
    {
        question: "Darshil is also Known as ________",
        a: "TheCoder",
        b: "TheHero",
        c: "TheBest",
        d: "TheBhaiya",
        correct: "a"
    }
]
// above created an array of object

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const submitBtn = document.getElementById("submitBtn");
const body = document.getElementById("body")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    aText.innerHTML = currentQuizData.a;
    bText.innerHTML = currentQuizData.b;
    cText.innerHTML = currentQuizData.c;
    dText.innerHTML = currentQuizData.d;
}


function getSelected() {

    let finalAnswer = undefined;
    // console.log("helo")
    
    answerEl.forEach((answerEl)=>{

        if (answerEl.checked) {
            finalAnswer =  answerEl.id;
        }
    });
    return finalAnswer;
    // what happen here is that first off i have selected all class of answer then i traverse each of them with forEach loop and in that if any answer is checked then that answer will be stored into the finalAnswer and it will return . to there from whom the function is called
}

function deSelectAnswer(){
    answerEl.forEach((answerEl)=>{

        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {


    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            
        }
        // answer = "";
        currentQuiz++;
        if (currentQuiz < quizData.length) {

            loadQuiz();
            deSelectAnswer();
        }
        else {
            
            body.innerHTML = `<div class="alert alert-success" role="alert">
                                    <strong>Thank You <strong/>: for playing this game
                                    You have scored ${score} out of ${quizData.length}
                                </div>`
        }
    }

});



