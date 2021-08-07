function sum(){
    switch(arguments.length){
        case 0:
            console.log('you have not passed any arguments');
            break;
        case 1:
            console.log('Pass at least two arguments');
            break;
        default:
            let result=0;
            let length=arguments.length;

            for(let i=0;i<length;i++){
                result=result+arguments[i];
            }
            console.log(result);
            break;
    }
}


sum();
sum(5);
sum(5,9);
sum(1,2,4,6);