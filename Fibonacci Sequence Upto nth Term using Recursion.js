function fibo(n){
    if(n<2){
        return n;
    }else{
        return fibo(n-1)+fibo(n-2);
    }
}

const nth=parseInt(prompt("Enter a positive number"));

if(nth<=0){
    console.log("Enter a positiver number");
}
else{
    for(let i=0;i<nth;i++){
        console.log(fibo(i));
    }
}