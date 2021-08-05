const number={
    name:'Redoy',
    age:20,
    hobbies:['reading','games','coding'],
};
const student = {
    gender: 'male'
}

for(let property in number){
    console.log(`${property}- ${number[property]}`);
}

const newObj=Object.assign(number,student);
console.log(newObj);