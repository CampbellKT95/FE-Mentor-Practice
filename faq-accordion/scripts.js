
const questions = document.querySelectorAll(".questions");

//create function that causes .faq-answer-container sibling display="inline-block"
//maybe grab parent element and look for child from there?

function expandAccordion(e) {
    const description = e.currentTarget.parentNode.children[2];
    if (description.className === "faq-answer-container-hidden") {
        description.className = "faq-answer-container-active"
    } else if (description.className === "faq-answer-container-active") {
        description.className = "faq-answer-container-hidden"   
    } else {
        console.log("an error has occured");
    };
};

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", expandAccordion);
};