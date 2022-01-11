const toDoList = document.querySelector("#toDoList");
const setNumberOfItems = document.querySelector(".number-of-items");
let numberOfItems = 0;

function renderListItems(item){
    let listItemWrapper = document.createElement("div");
    listItemWrapper.className = "list-item-wrapper";

    let listItem = document.createElement("li");
    
    listItem.addEventListener("click", () => {
        if (listItem.style.textDecoration === "") {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "" ;
        };
    });

    //will need to add completion circle & delete x as well as border-bottom
    listItem.innerHTML = item;

    const crossIcon = document.createElement("img");
    crossIcon.src="./todo-app-main/images/icon-cross.svg";
    crossIcon.alt="delete-icon";

    //need to create a delete function
    crossIcon.addEventListener("click", () => {
        listItemWrapper.remove();
    });

    listItemWrapper.appendChild(listItem);
    listItemWrapper.appendChild(crossIcon);
    toDoList.appendChild(listItemWrapper);

    updateNumberOfItems();
};

data.map((item) => {
    renderListItems(item);
});

function updateNumberOfItems(){
    numberOfItems++;
    setNumberOfItems.innerHTML = numberOfItems;
};

