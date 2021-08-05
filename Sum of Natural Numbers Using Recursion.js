function sum(n){
    if(n>0){
        return n+sum(n-1);
    }else{
        return n;
    }
}


const number=parseInt(prompt("Enter a positive number: "));

const result=sum(number);

console.log(`The sum is ${result}`);