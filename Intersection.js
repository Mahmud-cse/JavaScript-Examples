function intersection(arr1,arr2){
    const setA=new Set(arr1);
    const setB=new Set(arr2);

    let newArr=[];

    for(let i of setB){
        if(setA.has(i)){
            newArr.push(i);
        }
    }

    return newArr;
}

const array1=[1,2,4,6,7];
const array2=[1,2,4,8,9];

const result=intersection(array1,array2);
console.log(result);
