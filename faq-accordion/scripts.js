
const questions = document.querySelectorAll(".questions");

//create function that causes .faq-answer-container sibling display="inline-block"
//maybe grab parent element and look for child from there?

function expandAccordion(e) {
    const question = e.currentTarget;
    const answer = e.currentTarget.parentNode.children[2];
    const arrow = e.currentTarget.parentNode.children[1];
    console.log(arrow.className)

    if (answer.className === "faq-answer-container-hidden") {
        answer.className = "faq-answer-container-active";
        question.style.fontWeight = "700";
        arrow.className = "arrow-icon-active";
    } else if (answer.className === "faq-answer-container-active") {
        answer.className = "faq-answer-container-hidden";
        question.style.fontWeight = "400";   
        arrow.className = "arrow-icon-unactive";
    } else {
        answer.log("an error has occured");
    };
};

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", expandAccordion);
};