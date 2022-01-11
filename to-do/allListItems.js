const toDoList = document.querySelector("#toDoList");

data.map((item) => {
    renderListItems(item);
});

function renderListItems(item){

        let listItem = document.createElement("li");

        //will need to add completion circle & delete x as well as border-bottom
        listItem.innerHTML = item;
        toDoList.appendChild(listItem);

};

