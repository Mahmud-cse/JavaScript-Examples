function positive(arr){
    let newArray=[];
    for(let i of arr){
        if(i<0){
            break;
        }
        newArray.push(i);
    }
    return newArray;
}

const array=[1,2,-4,-5,7,9];
console.log(positive(array));