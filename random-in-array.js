function randomItem(arr){
    const randomIndex=Math.floor(Math.random()*arr.length);

    const item=arr[randomIndex];

    return item;
}

const array=[1,'hello',5,8];

console.log(randomItem(array));