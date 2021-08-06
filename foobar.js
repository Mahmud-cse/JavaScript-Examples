function foobar(num){
   console.log((num%15?'':'foobar')||(num%3?'':'foo')||(num%5?'':'bar'));
}

for(let i=1;i<=100;i++){
    foobar(i);
}