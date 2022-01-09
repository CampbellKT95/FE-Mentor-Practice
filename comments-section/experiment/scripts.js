const commentsContainer = document.querySelector(".comments-container")

for (const property in data) {
    if (property === "comments") {

        //will create each element, appending it to its parent div, and then
        //finally attach each parent div to commentsContainer

        for (let i = 0; i < data[property].length; i++) {
            console.log(data[property][i]);

            //first wrapper, contains profile-pic, username, timestamp
            let userWrapper = document.createElement("div");
            userWrapper.class = "user-wrapper";

            let profilePic = document.createElement("img");
            profilePic.class = "avatar-img";
            profilePic.src= data[property][i].user.image.png;
            profilePic.alt = data[property][i].user.username;
            userWrapper.appendChild(profilePic);

            let username = document.createElement("h2");
            username.innerHTML = data[property][i].user.username;
            userWrapper.appendChild(username);

            let timeStamp = document.createElement("p");
            timeStamp.innerHTML = data[property][i].user.createdAt;
            userWrapper.appendChild(timeStamp);

            //second wrapper, contains the comment
            let commentWrapper = document.createElement("div");
            commentWrapper.class = "comment";

            let commentText = document.createElement("p");
            commentText.innerHTML = data[property][i].content;
            commentWrapper.appendChild(commentText);

            //third wrapper, contains likes & replies
            let likeReplyContainer = document.createElement("div");
            likeReplyContainer.class = "like-reply-container";

            //contains likes, + & - symbols
            let likeNumberWrapper = document.createElement("div");
            likeNumberWrapper.class = "like-number-wrapper"

            let plusSymbol = document.createElement("span");
            plusSymbol.innerHTML = "+";
            likeNumberWrapper.appendChild(plusSymbol)

            let likes = document.createElement("p");
            likes.innerHTML = data[property][i].score;
            likeNumberWrapper.appendChild(likes);

            let minusSymbol = document.createElement("span");
            minusSymbol.innerHTML = "-";
            likeNumberWrapper.appendChild(minusSymbol);

            //adds likes wrapper to the final wrapper
            likeReplyContainer.appendChild(likeNumberWrapper);

            let reply = document.createElement("div");
            reply.class = "reply-wrapper";

            let replyIconSpan = document.createElement("span");

            let replyIconImg = document.createElement("img");
            replyIconImg.src = "../interactive-comments-section-main/images/icon-reply.svg";
            replyIconImg.alt = "reply-icon";
            replyIconImg.class = "reply-icon";
            
            replyIconSpan.appendChild(replyIconImg);

            let replyText = document.createElement("p");
            replyText.innerHTML = "REPLY";

            reply.appendChild(replyIconSpan);
            reply.appendChild(replyText);

            //adding the three wrappers to the overall comment container
            commentsContainer.appendChild(userWrapper);
            commentsContainer.appendChild(commentWrapper);
            commentsContainer.appendChild(likeReplyContainer);
        }
    }
}
        // <div class="user-wrapper">
        //     <img src="" alt="profile-pic" class="avatar-img" id="profile-img" />
        //     <h2 id="username" >USERNAME</h2>
        //     <p id="time">TIME</p>
        // </div>
        // <div class="comment">
        //     <p id="comment">COMMENT</p>
        // </div>
        // <div class="like-reply-container">
        //     <div class="like-number-wrapper">
        //         <span>+</span>
        //         <p id="number-likes">LIKES</p>
        //         <span>-</span>
        //     </div>
        //     <div class="reply-wrapper">
        //         <span><img src="./interactive-comments-section-main/images/icon-reply.svg" alt="reply-icon"
        //         class="reply-icon" /></span>
        //         <p>Reply</p>
        //     </div>
        // </div>