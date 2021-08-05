function countVowel(str){
    let count=str.match(/[aeiou]/gi).length;

    return count;
}

const string=prompt("Enter a string: ");

const result=countVowel(string);

console.log(result);