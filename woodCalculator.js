function woodCalculator(x,y,z){
    const chair=1;
    const table=3;
    const bed=5;
    let wood=((chair*x)+(table*y)+(bed*z));

    console.log(wood);
}

woodCalculator(4,1,3);