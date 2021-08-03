const number=parseInt(prompt("Enter a positive number: "));
// const number = 2; /



if (number == 1) {
    console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
    let flag = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log(`${number} is not a prime number`);
    } else {
        console.log(`${number} is a prime number`);
    }
}