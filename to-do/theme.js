//icon of sun/moon for light/dark
const themeIcon = document.querySelector("#theme-icon");
console.log(themeIcon)
let theme = "dark";
themeIcon.addEventListener("click", () => {
    if (theme === "dark") {
        console.log("to light")
        lightTheme();
    } else {
        console.log("to dark")
        darkTheme();
    };
});

//entire container, for background color
const body = document.body;

//image displayed at the top for light/dark
const bannerImage = document.querySelector(".header-container");

//input to create new to-do
const createNewItem = document.querySelector(".create-to-do");

//the rendered listItems
const listItemsWrapper = document.querySelector("#toDoList");

//final wrapper @ the bottom with filter options
const filterWrappers = document.querySelector(".filters-wrapper");

function darkTheme() {
    body.backgroundColor = "hsl(235, 21%, 11%)";

    bannerImage.backgroundImage = `url("./todo-app-main/images/bg-mobile-dark.jpg")`;

    themeIcon.src = "todo-app-main/images/icon-sun.svg";

    createNewItem.backgroundColor = "hsl(233, 14%, 35%)";
    createNewItem.color = "hsl(234, 39%, 85%)";

    listItemsWrapper.backgroundColor = "hsl(233, 14%, 35%)";
    listItemsWrapper.color = "white";

    filterWrappers.backgroundColor = "hsl(233, 14%, 35%)";

    theme = "dark";
};


function lightTheme() {
    body.backgroundColor = "hsl(0, 6%, 91%)";

    bannerImage.backgroundImage = `url("./todo-app-main/images/bg-mobile-light.jpg")`;

    themeIcon.src = "todo-app-main/images/icon-moon.svg";

    createNewItem.backgroundColor = "white";

    listItemsWrapper.color = "hsl(237, 14%, 26%)";
    listItemsWrapper.backgroundColor = "white";

    filterWrappers.backgroundColor = "white";

    theme = "light";
};