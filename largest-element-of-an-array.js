function lgElement(numbers){
    let largestElement=numbers[0];

    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>largestElement){
            largestElement=numbers[i];
        }
    }
    return largestElement;
}

// let result=lgElement([12,55,77,22,99]);
let result=lgElement([-2,-1,-44,-22,-88]);
console.log(result);