const express = require('express')
const app = express();
const port = 3000;
const user = ["sabbir","tamim","sani","nazim","aslam","mahfuj"];

app.get("/",(req, res) => {
  res.send('This App Is Call');
})

app.get("/items/book",(req,res) => {
  res.send({bookName:"JavaScript", author:"sabbir",})
})

app.listen(port,() =>{
  console.log(`listening port: ${port}`);
})
