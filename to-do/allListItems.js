const toDoList = document.querySelector("#toDoList");
const setNumberOfItems = document.querySelector(".number-of-items");
let numberOfItems = 0;

//array of things already rendered, to be manipulated for filters
const renderedItems = [];

function createListItems(item){
    let listItemWrapper = document.createElement("div");
    listItemWrapper.className = "list-item-wrapper";
    listItemWrapper.id = item.id;

    let listItem = document.createElement("li");
    
    listItem.addEventListener("click", () => {
        if (listItem.style.textDecoration === "") {
            listItem.style.textDecoration = "line-through";
            item.status = true;
            console.log(numberOfItems)
            // this subtraction does not work for some reason
            numberOfItems -= 2;
            //
            console.log(numberOfItems)
            updateNumberOfItems();
        } else {
            listItem.style.textDecoration = "" ;
            item.status = false;
            updateNumberOfItems();
        };
    });

    //will need to add completion circle & delete x as well as border-bottom
    listItem.innerHTML = item.task;
    listItem.className = "list-item"

    const crossIcon = document.createElement("img");
    crossIcon.src="./todo-app-main/images/icon-cross.svg";
    crossIcon.alt="delete-icon";
    crossIcon.className = "cross-icon";

    //onClick delete item
    crossIcon.addEventListener("click", () => {
        listItemWrapper.remove();
    });

    listItemWrapper.appendChild(listItem);
    listItemWrapper.appendChild(crossIcon);
    toDoList.appendChild(listItemWrapper);

    updateNumberOfItems();
};

function initialRenderListItems() {
    data.map((item) => {
        if (renderedItems.includes(item)) {
            return renderedItems;
        } else {
            createListItems(item);
            renderedItems.push(item);
        };
    });
};

function reRenderListItems() {

    data.map((item) => {
        let deleteEl = document.getElementById(item.id);
        deleteEl.remove();
    });

    numberOfItems = 0;

    data.map((item) => {
        createListItems(item);    
    });
};

function updateNumberOfItems(){
    numberOfItems++
    setNumberOfItems.innerHTML = `${numberOfItems} items left`;
};

initialRenderListItems();