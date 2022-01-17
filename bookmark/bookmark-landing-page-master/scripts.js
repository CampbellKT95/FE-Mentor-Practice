
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
