const name = "wenlin";
const age = 18;

const user = {
    name,
    age, 
    address:"new york"
}
console.log(user);


const product = {
    label: "sex toy",
    price: 200,
    stock: 260,
    salePrice: undefined
}
// const { label:productName, price, rating = 6} = product;
// console.log(productName);
// console.log(price);
// console.log(rating);


const transaction = (type, {label:productName, price,stock})=>{
console.log(productName);
console.log(stock);
console.log(price);
console.log(type);
}
transaction('order',product);