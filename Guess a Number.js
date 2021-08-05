function guessNumber(){
    let number=parseInt(prompt("Enter a number: "));

    const random=Math.floor(Math.random()*10)+1;

    while(random!=number){
        number=parseInt(prompt("Enter a number: "));
    }

    if(random==number){
        console.log("You guessed the correct number");
    }
}

guessNumber();