const str=prompt('Enter a string: ');
const checkStr=prompt('Enter a string you want to check: ');

if(str.indexOf(checkStr)!==-1){
    console.log(`The string contains ${checkStr}`);
}else{
    console.log(`The string does not contains ${checkStr}`);
}