// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.01));

// console.log(Math.random()) //gives a random number between 0-1
// console.log(Math.random()*20) //gives a random number between 0-20 (including decimals)
// console.log(Math.random()*30 + 10) //gives a random number between 10-40 (including decimals)


//console.log(Math.floor(Math.random()*3)) //gives a random number between 0-2 (only whole numbers- no decimals)


var lifesAnswers = [
    "It is certain.", //0 
    "It is decidedly so.",// 1
    "Without a doubt.", // 2
    "Yes - definitely.", // 3
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Idk but we gona be alright if we put Drake on every hook",
    "IDK but Yeezy is the best producer of all time" //21
];


function magic8ball(){
    console.log("Hmmmm determing your answer...please wait");
    let randomIndex = Math.floor(Math.random()*lifesAnswers.length);
    console.log(lifesAnswers[randomIndex]);

}


magic8ball()