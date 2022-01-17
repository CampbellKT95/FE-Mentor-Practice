
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

for (let i = 0; i < allFaqQuestions.length; i++) {
        allFaqQuestions[i].addEventListener("click", () => {
        console.log("clicked")
        allFaqAnswers[i].className = "faq-answer-wrapper-active";
    });
};
//
