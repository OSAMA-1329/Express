const express = require("express");
const HTTP_SERVER = express();
const PORT = 5000;
var cors = require("cors")

HTTP_SERVER.listen(PORT,()=> {console.log("server successfull")})



HTTP_SERVER.use(cors());

HTTP_SERVER.all("/", (req,res)=> {
  
  return res.status(200).json({
    message:"success"
  })

});




