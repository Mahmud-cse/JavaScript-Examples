function arrayLength(arr){
    let maxV = arr[0];
    for (a of arr) {
      if (a.length > maxV.length) maxV = a;
    }

    return maxV;
}

const array=["Mahmud","Ha","HappyMeMan"];
console.log(arrayLength(array));