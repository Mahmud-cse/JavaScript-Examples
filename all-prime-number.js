const maxN=parseInt(prompt("Enter max number"));

const minN=parseInt(prompt("Enter min number"));

for(let i=minN;i<maxN;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0){
        console.log(i);
    }
}