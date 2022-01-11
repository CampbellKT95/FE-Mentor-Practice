const commentsContainer = document.querySelector(".comments-container")

for (const property in data) {

    createComment(data, property);

};