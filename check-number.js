function checkNumber(x){
    let regexPattern=/^-?[0-9]+$/;

    let result=regexPattern.test(x);

    if(result){
        console.log(`${x} is an integer.`);
    }else{
        console.log(`${x} is a float value`);
    }
}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);