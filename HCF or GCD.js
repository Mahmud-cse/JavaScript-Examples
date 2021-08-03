const num1=prompt("Enter a first positive number: ");
const num2=prompt("Enter a second positive number: ");

let hcf=0;

for(let i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        hcf=i;
    }
}

console.log(`HCF of ${num1} and ${num2} is ${hcf}`);