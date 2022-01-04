
const questions = document.querySelectorAll(".questions");

//create function that causes .faq-answer-container child display="inline-block"


for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", console.log("click added"))
}