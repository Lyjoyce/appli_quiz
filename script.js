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

    if(username===storedUsername&&password===storedPassword){
        /*localStorage fonctionne avec clé:valeur*/
        localStorage.setItem("isAuthenticated", true)
        localStorage.setItem("password", password)
   
        alert("inscription réussie! Vous pouvez vous connecter")
    }else{
        alert("Veuillez remplir tous les champs")
    }
}
/*récupérer données sur le dom qui est chargé*/
