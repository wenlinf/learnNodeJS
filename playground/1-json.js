const fs= require('fs');
// const book={
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday',
// }
// const jsonData=JSON.stringify(book);
// fs.writeFileSync('1-json.json',jsonData);
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson=dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson=dataBuffer.toString();
const data = JSON.parse(dataJson);
data.name="wenlin";
data.planet="mars";
const jsonData = JSON.stringify(data);
fs.writeFileSync('1-json.json',jsonData);
