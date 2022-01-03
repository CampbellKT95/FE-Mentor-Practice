
const image = document.querySelector("#image");
console.log(image)
const activeState = document.querySelector("#active-state");

function activateState() {
    activeState.style.display = "block";
};

function deactivateState() {
    activeState.style.display = "none";
}

image.addEventListener("mouseover", activateState);
activeState.addEventListener("mouseout", deactivateState)