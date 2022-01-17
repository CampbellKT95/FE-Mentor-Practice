
//mobile modal
modal = document.querySelector("#modal");
openModal = document.querySelector("#open-modal");
closeModal = document.querySelector(".close-modal-icon");

openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
//

//faq
allFaqQuestions = document.querySelectorAll(".faq-question-wrapper");
allFaqAnswers = document.querySelectorAll(".faq-answer-wrapper");
faqArrows = document.querySelectorAll(".dropdown-arrow-inactive");

let faq = {
    0: false,
    1: false,
    2: false,
    3: false
};

for (let i = 0; i < allFaqQuestions.length; i++) {
        allFaqQuestions[i].addEventListener("click", () => {
        if (faq[i] === false) {
            allFaqAnswers[i].className = "faq-answer-wrapper-active";
            faqArrows[i].className = "dropdown-arrow-active";
            faq = {...faq, [i] : true};
        } else {
            allFaqAnswers[i].className = "faq-answer-wrapper";
            faqArrows[i].className = "dropdown-arrow-inactive";
            faq = {...faq, [i] : false};    
        };
    });
};
//
