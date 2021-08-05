    function recurtion(number){
        if(number==1){
            return 1;
        }
        return number*recurtion(number-1);
    }

    console.log(recurtion(5));