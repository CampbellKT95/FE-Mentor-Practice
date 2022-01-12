const all = document.querySelector("#filter-all");
all.addEventListener("click", () => filterAll());

const active = document.querySelector("#filter-active");
active.addEventListener("click", () => filterActive());

const completed = document.querySelector("#filter-completed")
completed.addEventListener("click", () => filterComplete());

function filterAll() {
    renderListItems();
};

function filterActive() {
    //map through all items with status: false to render
    const filterIncomplete = renderedItems.filter((item) => {
        return item.status === false;
    });
    console.log(filterIncomplete);
    filterIncomplete.map((item) => {
        createListItems(item);
    });
};

function filterComplete() {
    //map through all items with status: true to render
    const filterCompleted = renderedItems.filter((item) => {
        return item.status === true;
    });
    console.log(filterCompleted)
    filterCompleted.map((item) => {
        createListItems(item);
    });
};

