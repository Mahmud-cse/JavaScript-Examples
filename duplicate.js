 function duplicate(arr){
     let unique=[];
     for(let element of  arr){
        if(unique.indexOf(element) ==-1){
            unique.push(element);
        }
     }
     return unique;
 }

 const result=duplicate(['ok','time','dream','hard work','learn','life','ok','time','dream','hard work','books']);
 console.log(result);