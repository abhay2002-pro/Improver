const express=require('express');
const writeGood = require('write-good');
const app=express();
const cors = require('cors')
app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.use(cors(origin: 'http://localhost:3000',
// methods: ['GET', 'POST', 'PUT', 'DELETE'],
// allowedHeaders: ['Content-Type']));
app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
//{ origin: 'http://localhost:3000',methods: ['POST'],allowedHeaders: ['Content-Type'],credentials: true }
app.post("/check",(req,res)=>{
    console.log(req.body.Test);
    var suggestions = writeGood(`${req.body.Test}`);
    console.log(suggestions);
    res.send(suggestions);
});
app.listen(4000);