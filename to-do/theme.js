//icon of sun/moon for light/dark
const themeIcon = document.querySelector("#theme-icon");
let theme = "light";
themeIcon.addEventListener("click", () => {
    if (theme === "light") {
        darkTheme();
    } else {
        lightTheme();
    };
});

//entire container, for background color
const body = document.body;

//image displayed at the top for light/dark
const bannerImage = document.querySelector(".header-container");

//input to create new to-do
const createNewItem = document.querySelector(".create-to-do");

//the rendered listItems
const listItemsContainer = document.querySelector(".list-items-container");

const listItemsWrapper = document.querySelector(".list-item-wrapper");
console.log(listItemsWrapper)

const clearCompletedWrapper = document.querySelector(".number-clear-wrapper");

//final wrapper @ the bottom with filter options
const filterWrappers = document.querySelector(".filters-wrapper");

function darkTheme() {
    body.style.backgroundColor = "hsl(235, 21%, 11%)";

    bannerImage.style.backgroundImage = `url("./todo-app-main/images/bg-mobile-dark.jpg")`;

    themeIcon.style.src = "todo-app-main/images/icon-sun.svg";

    createNewItem.style.backgroundColor = "hsl(233, 14%, 35%)";
    createNewItem.style.color = "hsl(234, 39%, 85%)";

    listItemsContainer.style.backgroundColor = "hsl(233, 14%, 35%)";
    listItemsWrapper.style.color = "white";

    clearCompletedWrapper.style.backgroundColor = "hsl(233, 14%, 35%)";
    clearCompletedWrapper.style.color = "white";

    filterWrappers.style.backgroundColor = "hsl(233, 14%, 35%)";

    theme = "dark";
};


function lightTheme() {
    body.style.backgroundColor = "hsl(0, 6%, 91%)";

    bannerImage.style.backgroundImage = `url("./todo-app-main/images/bg-mobile-light.jpg")`;

    themeIcon.style.src = "todo-app-main/images/icon-moon.svg";

    createNewItem.style.backgroundColor = "white";

    listItemsContainer.style.color = "hsl(237, 14%, 26%)";
    listItemsWrapper.style.backgroundColor = "white";

    clearCompletedWrapper.style.backgroundColor = "white";
    clearCompletedWrapper.style.color = "hsl(237, 14%, 26%)";

    filterWrappers.style.backgroundColor = "white";

    theme = "light";
};