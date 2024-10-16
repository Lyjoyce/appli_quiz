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
