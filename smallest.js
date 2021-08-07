const phones=[
    {name:'samsung',price:500,camera:10},
    {name:'iphone',price:700,camera:15},
    {name:'sony',price:900,camera:20},
];

let cheapest=phones[0].price;
let totalPrice=0;
for(let elements of phones){
    if(cheapest.price>elements.price){
        cheapest=elements;
    }
    totalPrice+=elements.price;
}

console.log(totalPrice);
console.log(cheapest);
    
