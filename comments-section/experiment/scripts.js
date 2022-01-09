
const profileImg = document.querySelector("#profile-img");
const username = document.querySelector("#username");
const time = document.querySelector("#time");
const comment = document.querySelector("#comment");
const likes = document.querySelector("#number-likes");

//loop through object to create each section
for (const property in data) {
    if (property === "comments") {
        // console.log(data[property])
        for (let i = 0; i < data[property].length; i++) {
            console.log(data[property][i])
        }
    }
}