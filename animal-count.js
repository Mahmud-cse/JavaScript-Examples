function animalCount(mile){
    const first10=10;
    const second10=50;
    const rest=100;

    if(mile<=10){
        let count=mile*first10;
        console.log(`Total ${count} animals you will see`);
    }else if(mile<=20){
        let first=10*first10;
        let otherMile=mile-10;
        let count=otherMile*second10;
        let total=count+first;
        console.log(`Total ${total} animals you will see`);
    }else{
        let first=10*first10;
        let second=50*first10;
        let otherMile=mile-20;
        let count=otherMile*rest;
        let total=count+first+second;
        console.log(`Total ${total} animals you will see`);
    }
}

animalCount(35);