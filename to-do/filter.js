const all = document.querySelector("#filter-all");
all.addEventListener("click", () => filterAll());

const active = document.querySelector("#filter-active");
active.addEventListener("click", () => filterActive());

const completed = document.querySelector("#filter-completed")
completed.addEventListener("click", () => filterComplete());

function filterAll() {
    reRenderListItems();
};

function filterActive() {
    //map through all items with status: false to render
    reRenderListItems();

    const filterIncomplete = renderedItems.filter((item) => {
        return item.status === true;
    });

    filterIncomplete.map((item) => {
        let el = document.getElementById(item.id);
        el.style.display = "none";
    });
};

function filterComplete() {
    //map through all items with status: true to render
    reRenderListItems();

    const filterCompleted = renderedItems.filter((item) => {
        return item.status === false;
    });

    filterCompleted.map((item) => {
        let el = document.getElementById(item.id);
        el.style.display = "none";
    });
};

