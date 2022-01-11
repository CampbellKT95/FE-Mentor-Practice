const createNewToDo = document.querySelector(".create-to-do");
const newToDoForm = document.querySelector(".new-to-do-form");

createNewToDo.addEventListener("change", (e) => {
    createNewToDo.value=e.target.value;
});

newToDoForm.addEventListener("submit", (e) => { 
    e.preventDefault();
    renderListItems(createNewToDo.value);
})