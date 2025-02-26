// SELECTION 
let currentQuestionIndex = 0
let questions = []
let selectedDifficulty = ""

document.querySelectorAll(".difficulty-btn").forEach((btn) => {
    btn.addEventListener("click", function() {
        const level = btn.getAttribute("data-level")
        loadQuestions(level)
    })
})

async function loadQuestions(difficulty) {
    try{
        const response = await fetch("3quest.json")
        questions = await response.json()

        const FilterdQuestions = questions.filter(
            (q) => q.difficulty === difficulty
        )
    } catch (error){
        console.log("Erreur lors du chargement")
    }
}

//Démarrer le quiz
function startQuiz() {
    document.querySelector(".difficulty-selection").classList.add("hidden")
    document.getElementById("quiz-container").classList.remove("hidden")
    showQuestion()
}

//Afficher la question actuelle
function showQuestion() {
    if(currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex]
        const questionContainer= document.getElementById("quiz-container")

        questionContainer.innerHTML = `
        <div class"question">
        <p> ${questionData.question} <p/>
        <div/>
        <form id="quiz-form">
         ${questionData.options
         .map(
                (option, index)=> `
                <label class="option"> 
                    <input type="radio" name="answer" value="${option}">
                    <span class="custom-radio"></span>
                    ${option}
                </label>
                `
                )
            .join("")}
            <button type="button" onclick="submitAnswer()">Soumettre</button>
        </form>
        `
        }else{
            showFinalResult()
        }
}

//Soumettre la réponse actuelle
function submitAnswer(){
    const form = document.getElementById("quiz-form")
    const selectAnswer = form.answer.value

    if (!selectAnswer){
        alert("Veuillez sélectionner une réponse")
        return
    }
    //Vérifier la réponse et passer à la question suivante
    checkAnswer(selectAnswer)
    nextQuestion()
}
function nextQuestion(){
    currentQuestionIndex++
    showQuestion()
}
// Vérifier si la réponse est correcte
function checkAnswer(selectAnswer) {
    const currentQuestion = questions[currentQuestionIndex]
    if (selectAnswer === currentQuestion.answer){
        incrementScore()
    }
}
//Incrémenter le score

let score = 0
function incrementScore() {
    score++
}
//Afficher le résultat final
function showFinalResult() {
    const quizContainer = document.getElementById("quiz-container")
    quizContainer.innerHTML = `
    <div id="result>
    <p>Votre score final est de ${score} sur ${questions.length}.</p>
    </div>
    `
}

// SCORE

function calculateScore(callback){
    const correctAnswers ={
        q1:"Paris",
        q2:"Mercure",
        q3:"Jupiter",
    }
    const form = document.getElementById("quiz-form")
    let score=0
    for(const question in correctAnswers){
        const userAnswers= form[question].value
        if(userAnswers===correctAnswers[question]){
            score++
        }
    }
    callback(score)
}
/*une fonction qui a la responsabilité d'afficher le score*/
function displayResult(score, callback){
    const resultDIV = document.getElementById("result")
        //badkiks pour écrire js dans html avec ${}
    resultDIV.innerHTML= `votre score est de ${score} sur 3.`
    callback(score)
}
/*une fonction qui a la responsabilité d'afficher un mss en f° du score*/
/**
 * 
 * @param {*int} score 
 */
function handleMessage(score){
    const resultDIV = document.getElementById("result")
    /*To clean the result on page*/
    resultDIV.classList.remove("excellent","good","try-again")
    if(score===3){
        resultDIV.innerHTML+=" <br>Excellent!"
        resultDIV.classList.add("excellent")
        }else if(score===2){
        resultDIV.innerHTML+=" <br>Bon travail, vous pouvez vous améliorer!"
        resultDIV.classList.add("good")
        }else{
        resultDIV.innerHTML+=" <br>Vous pouvez faire mieux!"
        resultDIV.classList.add("try-again")
    }
}

/**
 * cette function affiche username dans le span, le nom utilisateur du localStorage
 * @param {*} username 
 */
function showUserMenu(username){
    const usernameDisplay= document.getElementById("username-display")
    usernameDisplay.textContent= username
}
//Unefois le DOM chargé, la fonction récupère l'username ()=>
document.addEventListener("DOMContentLoaded", function(){
    const storedUsername= localStorage.getItem("username")
    const isAuthenticated= localStorage.getItem("isAuthenticated")
    if(storedUsername && isAuthenticated === "true"){
        const usernameDisplay= document.getElementById("username-display")
        usernameDisplay.textContent= storedUsername 
        showUserMenu(storedUsername)
        loadQuestions()
    }else{
        window.location.href="login.html"
    }
})

document.getElementById("logout-btn").addEventListener("click", function(){
    localStorage.setItem("isAuthenticated",false)
    window.location.href="login.html"
})
/*
let currentquestionIndex= 0;
let questions= [];
let selectedDifficulty="";

async function loadQuestions(difficulty){
    try {
        const response= await fetch("3quest.json");
        questions= await response.json();
        const FilteredQuestions= questions.filter ((q) => q.difficulty===difficulty);
        console.log("questions non filtrées" +questions);
        console.log("questions filtrées" + FilteredQuestions);

    } catch (error) {
        console.log ("erreur lors du chargement des questions", error);
    }
}*/