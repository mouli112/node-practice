const express = require("express");
const bodyParser =  require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index1.html");
});

app.post("/calculator",(req,res)=>{
    const {num1,num2} = req.body;
    const sum = parseInt(num1)+parseInt(num2);
    res.send(`total addition ${sum}`);
})
app.listen(5000,(res)=> console.log(`Server is running on port 5000`));
