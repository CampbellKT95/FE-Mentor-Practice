let currentUsername = "";
let currentUserImage = "";

function createComment(data, property) {
    if (data[property].username !== undefined) {
        currentUsername = data[property].username;
        currentUserImage = data[property].image.png;
    };

    for (let i = 0; i < data[property].length; i++) {
        console.log(data[property][i].replies)

        //first wrapper, contains profile-pic, username, timestamp
        let userWrapper = document.createElement("div");
        userWrapper.className = "user-wrapper";

        let profilePic = document.createElement("img");
        profilePic.className = "avatar-img";
        profilePic.src= data[property][i].user.image.png;
        profilePic.alt = data[property][i].user.username;
        userWrapper.appendChild(profilePic);

        let username = document.createElement("h2");
        username.innerHTML = data[property][i].user.username;
        userWrapper.appendChild(username);

        let timeStamp = document.createElement("p");
        timeStamp.innerHTML = data[property][i].createdAt;
        userWrapper.appendChild(timeStamp);

        //second wrapper, contains the comment
        let commentWrapper = document.createElement("div");
        commentWrapper.className = "comment";

        let commentText = document.createElement("p");
        commentText.innerHTML = data[property][i].content;
        commentWrapper.appendChild(commentText);

        //third wrapper, contains likes & replies
        let likeReplyContainer = document.createElement("div");
        likeReplyContainer.className = "like-reply-container";

        //contains likes, + & - symbols
        let likeNumberWrapper = document.createElement("div");
        likeNumberWrapper.className = "like-number-wrapper"

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
        reply.className = "reply-wrapper";

        let replyIconSpan = document.createElement("span");

        let replyIconImg = document.createElement("img");
        replyIconImg.src = "./images/icon-reply.svg";
        replyIconImg.alt = "reply-icon";
        replyIconImg.className = "reply-icon";
        
        replyIconSpan.appendChild(replyIconImg);
        reply.appendChild(replyIconSpan);
        likeReplyContainer.appendChild(reply);

        let replyText = document.createElement("p");
        replyText.innerHTML = "REPLY";

        reply.appendChild(replyIconSpan);
        reply.appendChild(replyText);

        //adding the three wrappers to the overall comment container
        const commentsWrapper = document.createElement("div");
        commentsWrapper.className = "comment-wrapper"

        commentsWrapper.appendChild(userWrapper);
        commentsWrapper.appendChild(commentWrapper);
        commentsWrapper.appendChild(likeReplyContainer);

        commentsContainer.appendChild(commentsWrapper);

        // for (let i = 0; i < data[property][i].replies.length; i++) {}
    };
};