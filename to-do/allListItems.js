const toDoList = document.querySelector("#toDoList");
const setNumberOfItems = document.querySelector(".number-of-items");
let numberOfItems = 0;

function renderListItems(item){
        let listItem = document.createElement("li");

        //will need to add completion circle & delete x as well as border-bottom
        listItem.innerHTML = item;
        toDoList.appendChild(listItem);

        updateNumberOfItems();
};

data.map((item) => {
    renderListItems(item);
});

function updateNumberOfItems(){
    numberOfItems++;
    setNumberOfItems.innerHTML = numberOfItems;
};

