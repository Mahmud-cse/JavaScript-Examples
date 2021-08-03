const minN=parseInt(prompt("Enter a low integer number: "));
const maxN=parseInt(prompt("Enter a high integer number: "));

for(let i=minN;i<maxN;i++){
    let temp=i;
    let sum=0;
    let power=i.toString().length;
    while(temp>0){
        let remainder=temp%10;
        sum+=remainder**power;
        temp=parseInt(temp/10);
    }
    if(sum==i){
        console.log(i);
    }
}