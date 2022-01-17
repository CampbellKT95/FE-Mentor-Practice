
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

const faq = {
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

// user email input
const errorSpan = document.querySelector(".input-error-notice-inactive");
const errorMessage = document.querySelector(".error-message-inactive");

const emailInput = document.querySelector("#input-email");
emailInput.addEventListener("change", (e) => {
    emailInput.value = e.target.value;
});

const signUpForm = document.querySelector(".sign-up-form");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(emailInput.value)
    if (emailInput.value.includes("@")) {
        errorSpan.className = "input-error-notice-inactive";
        errorMessage.className = "error-message-inactive";
    } else {
        emailInput.className = "sign-up-form-input-error";
        errorSpan.className = "input-error-notice-active";
        errorMessage.className = "error-message";
    };
});
