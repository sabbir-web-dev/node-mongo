const express = require('express')
const cors = require('cors');
const app = express();
const port = 3000;
const user = ["sabbir","tamim","sani","nazim","aslam","mahfuj","Sagor","Jikirul","siam","alamin"];


app.use(cors())

app.get("/",(req, res) => {
  res.send('This App Is Call');
})

app.get("/items/book",(req,res) => {
  res.send({bookName:"JavaScript", author:"sabbir",})
})

app.get("/user/:id",cors(),(req,res)=>{
  const id = req.params.id;
  const name = user[id]
  res.send({id,name})
})

app.listen(port,() =>{
  console.log(`listening port: ${port}`);
})
