function string(x){
    const result=x.replace(/\s/g,'');
    return result;
}

const result=string("         hello              world             ");
console.log(result);