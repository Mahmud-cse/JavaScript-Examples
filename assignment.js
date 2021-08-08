// seerToMon
function seerToMon(value){
    if(typeof(value)!=='number'){
        return('Value must be a positiver number');
    }else if(value<0){
        return('Value can not be negative');
    }else{
        let convert=value/40;
        return convert;
    }
}

console.log(seerToMon(40));


// totalSales
function totalSales(shirt,pan,shoe){
    if(typeof(shirt,pan,shoe)!=='number'){
        return('Value must be a positiver number');
    }else if((shirt<0) && (pan<0) && (shoe<0)){
        return('Value can not be negative');
    }else{
        let shirtTotal=shirt*100;
        let panTotal=pan*200;
        let shoeTotal=shoe*500;

        let totalSales=shirtTotal+panTotal+shoeTotal;
        return totalSales;
    }
}

console.log(totalSales(1,1,1));


// deliveryCost
function deliveryCost(value){
    const first100=100;
    const second100=80;
    const rest=50;
    let count=0;
    let count2=0;
    let count3=0;

    if(typeof(value)!=='number'){
        return('Value must be a positiver number');
    }else if(value<0){
        return('Value can not be negative');
    }else if(value<=100){
        count=value*first100;
    }else if(value<=200){
        let first=first100*100;
        let other=value-100;
        let secondRest=other*second100;
        count2=secondRest+first;
    }else if(value>200){
        let first=first100*100;
        let second=second100*100;
        let other=value-200;
        let remain=other*rest;
        count3=remain+first+second;
    }
    return count+count2+count3;
}

console.log(deliveryCost(150));


// perfectFriend
function perfectFriend(value){
        for(let i of value){
            if(typeof(i)=='number'){
                return('Value must be a string');
            }else{
                if(i.length==5){
                    return i;
                }
            }
        }
}

const array=["Mahmud","Redoy","Rakib","Hasan"];
console.log(perfectFriend(array));