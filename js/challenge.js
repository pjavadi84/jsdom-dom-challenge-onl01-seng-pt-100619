document.addEventListener("DOMContentLoaded", function(){
    // accessing the counter element
    const myTimer = document.getElementById('counter');
    // setting timer value
    let timerValue = 0;
    // setting counter functions/ ability to increment:
    // "As a user, I should see the timer increment every second once the page has loaded."
    let timeCounter = window.setInterval(incrementNumber, 500);
    const minusBtn = document.getElementById("minus");
    const pauseBtn = document.getElementById("pause");
    const plusBtn = document.getElementById("plus");
    const likeList = document.querySelector("ul.likes");
    const heartBtn = document.getElementById("heart");
    const commentBtn = document.getElementById("submit");

    const newCommentForm = document.getElementById("comment-form");
    newCommentForm.addEventListener("submit", createNewComment);
    

    // function that actually increments the counter
    function incrementNumber(){
        myTimer.innerText = timerValue;
        timerValue++;
    }

    // function that pauses/resumes the counterTime
    pauseBtn.addEventListener("click", function(){
        if ( pauseBtn.innerText === "pause"){
            window.clearInterval(timeCounter);
            pauseBtn.className = 'paused';
            pauseBtn.innerText = 'resume';
            minusBtn.disabled = true;
            plusBtn.disabled = true;
            heartBtn.disabled= true;
            commentBtn.disabled= true;
        }
        else {
            timeCounter = window.setInterval(incrementNumber, 500);
            pauseBtn.className = 'running';
            pauseBtn.innerText = 'pause';
            minusBtn.disabled = false;
            plusBtn.disabled = false;
            heartBtn.disabled= false;
            commentBtn.disabled= false;
        }

    });

    // User can manually increment/decrement the counter using the plus and minus buttons.
    minusBtn.addEventListener("click",function(){
        timerValue -= 1;
        myTimer.innerText = timerValue;
    });
    
    plusBtn.addEventListener("click", function(){
        timerValue += 1;
        myTimer.innerText = timerValue;
    });

    // User can 'like' an individual number of the counter.
    // TODO: I should see count of the number of 'likes' associated with that number.
    heartBtn.addEventListener("click", function(event){
        // create li to add the "this has been liked" feature
        let likeListItem = document.createElement("li");
        let heartNum = "number " + myTimer.innerText + " had likes!";
        likeListItem.innerText = heartNum;
        // add this inner text into the ul.likes section, right about comments
        likeList.appendChild(likeListItem);
    });

    //adding comments
    function createNewComment(e){
        e.preventDefault();
        let newComment = document.createElement("p");
        newComment.innerText = document.getElementById("comment-input").value;
        
        const appendNewComment = document.getElementById("list")
        appendNewComment.appendChild(newComment);
        e.target.reset();

    };

});


