import fs from 'fs';

let state = {
    order: JSON.parse (fs.readFileSync('./json/data/json').toString())
}

let updateProducts = state.ourder.updateProducts;
updateProducts.push({
    no:"s002-002",
    name: "블루 양말",
    price: 2000,
    amout:1
});

console.log(state.order.updateProducts,state.order.products ===udate);

console.log("=====================================");

let state ={
    order: JSON.parse(fs.readFileSync('/json/data/json').toString())
}

let updateProducts = state.order.products.concat({
    no:"s002-002",
    name: "블루 양말",
    price: 2000,
    amout:1
})