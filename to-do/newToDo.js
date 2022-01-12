const createNewToDo = document.querySelector(".create-to-do");
const newToDoForm = document.querySelector(".new-to-do-form");
let id = 4

createNewToDo.addEventListener("change", (e) => {
    createNewToDo.value=e.target.value;
});

newToDoForm.addEventListener("submit", (e) => { 
    e.preventDefault();
    data.push({
        task: createNewToDo.value,
        status: false,
        id: id
    });
    id++;
    renderListItems();
});

