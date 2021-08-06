function fibo(num){
        if(typeof num != 'number'){
            return "Input a positive number";
        }

        if(num<1){
            return 'Inter a number greater than 0';
        }

        let fibonacci=[0,1];
        if(num==1){
            return 0;
        }else if(num==2){
            return fibonacci;
        }else{
            for(let i=2;i<num;i++){
                fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
            }
            return fibonacci;
        }
}

const fiboSeries=fibo(3);

console.log(fiboSeries);