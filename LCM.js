const num1=prompt("Enter first number: ");
const num2=prompt("Enter second number: ");

let hcf=lcm=0;

for(let i=0;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        hcf=i;
    }
}

lcm=(num1*num2)/hcf;

console.log(`${num1} and ${num2} LCM is ${lcm}`);