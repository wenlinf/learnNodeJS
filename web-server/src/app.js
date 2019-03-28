const express = require('express');
console.log(__dirname);
console.log(__filename);
const app=express();
app.get('',(req,res)=>{
    res.send('<h1>hello express</h1>');
});
app.get('/help',(req,res)=>{
    res.send([{
        name:"wenlin",
        age:22
    },
    {
        name:"ben",
        age:25
    }
    ]);
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>');
})
app.get('/weather',(req,res)=>{
    res.send({
        forecast:"sunny",
        location:"topeka"
    });
})

app.listen(3000,()=>{
    console.log("server is up on port 3000");
})