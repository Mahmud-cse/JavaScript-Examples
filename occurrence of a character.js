function countLetter(string,letter){
    let re=new RegExp(letter,'g');
    let count=string.match(re).length;

    return count;
}

const string=prompt('Enter a string');
const letter=prompt('Enter a letter to check');

const result=countLetter(string,letter);

console.log(result);