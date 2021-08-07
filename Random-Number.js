const min=parseInt(prompt("Enter a min value: "));
const max=parseInt(prompt("Enter a min value: "));

const number=Math.floor(Math.random()*(max-min+1))+min;

console.log(`Random value between ${min} and ${max} is ${number}`);