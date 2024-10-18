function submitQuiz() {
    const correctAnswers = {
        q1: "Paris",
        q2: "Mercure",
        q3: "Jupiter",
    }
    const form = document.getElementById("quiz-form")
    let score = 0
    for (const question in correctAnswers) {
        const userAnswers = form[question].value
        if (userAnswers === correctAnswers[question]) {
            score++
        }
    }

    const resultDIV = document.getElementById("result")
    //badkiks pour écrire js dans html avec ${}
    resultDIV.innerHTML = `votre score est de ${score} sur 3.`

if (score === 3) {
    resultDIV.innerHTML += "<br>Excellent!"
} else if (score === 2) {
    resultDIV.innerHTML += "<br>Bon travail, vous pouvez vous améliorer!"
} else {
    resultDIV.innerHTML += "<br>Vous pouvez faire mieux!"
}
}
//REGISTER
function registerUser(){
    const username= document.getElementById("username").value
    const password= document.getElementById("password").value

    if(username&&password){
        /*localStorage fonctionne avec clé,valeur*/
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
   
        alert("inscription réussie! Vous pouvez maintenant vous connecter")
        window.location.href="login.html"
    }else{
        alert("Veuillez remplir tous les champs")
    }
}
//LOGIN expliquer la f, ses paramètres,types, ce qu'elle renvoie
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
/**
 * cette fonction affiche username dans le span
 * @param {*} username 
 */
function showUserMenu(username){
    const usernameDisplay= document.getElementById("username-display")
    usernameDisplay.textContent= username
}
//Unefois le DOM chargé, la fonction récupère l'username dans le localStorage
document.addEventListener("DOMContentLoaded", ()=>{
    const storedUsername= localStorage.getItem("username")
    if(storedUsername){
        showUserMenu(storedUsername)
    }else{
        window.location.href= "login.html"
    }
})
document.getElementById("logout-btn").addEventListener("click", function(){
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    localStorage.setItem("isAuthenticated", false)
    window.location.href= "login.html"
})



/*function checkAuth(){
    const isAuthenticated =localStorage.getItem("isAuthenticated")
    if(isAuthenticated !== "true"){
        alert("Veuillez vous connecter pour acceder au quiz") 
    }
}*/