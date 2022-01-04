
const questions = document.querySelectorAll(".questions");
const arrows = document.querySelectorAll(".arrow");

function expandAccordion(e) {
    const question = e.currentTarget.parentNode.children[0];
    const answer = e.currentTarget.parentNode.children[2];
    const arrow = e.currentTarget.parentNode.children[1];

    if (answer.className === "faq-answer-container-hidden") {
        answer.className = "faq-answer-container-active";
        question.style.fontWeight = "700";
        arrow.className = "arrow-icon-active";
    } else if (answer.className === "faq-answer-container-active") {
        answer.className = "faq-answer-container-hidden";
        question.style.fontWeight = "400";   
        arrow.className = "arrow-icon-unactive";
    } else {
        console.log("an error has occured");
    };
};

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", expandAccordion);
};

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", expandAccordion);
}