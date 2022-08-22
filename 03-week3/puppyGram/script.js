console.log("wazaaaaap");


function petDog(){
    alert("You just pet this puppy. Thats a good boy/girl!")
    // console.log("you pet this dog!")
}


function toggleLogin(btn){
    console.log("you clicked on login button!", btn);

    //btn represents the button that was clicked

    //if the buttons innner text currently says Login, then change it to logout
    if(btn.innerText === "Login"){
        //to change its text-> modify the btn.innerText to equal logout
        btn.innerText = "Logout";
    }else{
        //otherwise change it to login
        btn.innerText = "Login";
    }
}


function removeButton(btn){
    // console.log("removing something!", btn);
    btn.remove();
}

function playVideo(videoElement){
    // console.log("annnnd action!");
    videoElement.play();
}

function pauseVideo(videoElement){
    // console.log("annnnd action!", videoElement);
    videoElement.pause();
}

function switchImg(imgElement){
    console.log(imgElement.src);
    if(imgElement.src === "http://127.0.0.1:5501/03-week3/puppyGram/resources/puppy.jpeg"){
        imgElement.src = "./resources/anothaPuppy.jpeg"
    }else{
        imgElement.src = "./resources/puppy.jpeg"
    }
}


function removeCookieBox(id){
    // console.log('id of the box i want to remove is ', id)
    //grab from the html an element with the id of "cookie-box" and put it in a variable
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}


function increaseLikes(elementID){
    console.log("i liike", elementID);
    //grab an element with that elementID
    let spanElement = document.querySelector("#"+ elementID);
    console.log(spanElement.innerText)

    //store the number that is in the span element into a variable
    let currentCount = spanElement.innerText;

    //increment the count
    currentCount++;

    //update the spanElement inner text to be the current count after increment the current count
    spanElement.innerText = currentCount;

    // document.querySelector("#"+elementID).innerText =  parseInt(document.querySelector("#"+elementID).innerText)+1;
}