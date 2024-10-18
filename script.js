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
function submitQuiz() {
    calculateScore(function(score) {
        displayResult(score, function() {
            handleMessage(score)
        })
    })
}
/*REGISTER*/
function registerUser(){
    const username= document.getElementById("username").value
    const password= document.getElementById("password").value

    if(username&&password){
        /*localStorage fonctionne avec clé,valeur*/
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
   
        alert("inscription réussie! Vous pouvez maintenant vous connecter")
    }else{
        alert("Veuillez remplir tous les champs")
    }
}
/*LOGIN*/
function loginUser(){
    const username= document.getElementById("login-username").value
    const password= document.getElementById("login-password").value

    const storedUsername=localStorage.getItem("username")
    const storedPassword=localStorage.getItem("password")

    if(username===storedUsername && password===storedPassword){
        localStorage.setItem("isAuthenticated", true)
        window.location.href="index.html"
    }else{
        alert("nom d'utilisateur ou mot de pass incorrect")
    }
}
function checkAuth(){
    const isAuthenticated =localStorage.getItem("isAuthenticated")
    if(isAuthenticated !== "true"){
        alert("Veuillez vous connecter pour acceder au quiz") 
        window.location.href="login.html"
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
/*Unefois le DOM chargé, la fonction récupère l'username*/
document.addEventListener("DOMContentLoaded", function(){
    const storedUsername= localStorage.getItem("username")
    if(storedUsername){
        showUserMenu(storedUsername)
    }else{
        window.location.href="login.html"
    }
})

document.getElementById("logout-btn").addEventListener("click", function(){
    localStorage.removeItem("username")
    window.location.href="login.html"
})
