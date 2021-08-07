function compareArrays(arr1,arr2){
    const result = JSON.stringify(arr1) == JSON.stringify(arr2);

    if(result){
        console.log('The arrays have been the same result');
    }else{
        console.log('The arrays have been different result');
    }
}

const array1=[1,3,5,8];
const array2=[1,3,5,8];

compareArrays(array1,array2);