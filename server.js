const express=require("express");
const app=express();
app.use(express.json());
// connect
const db_connect=require("./connect.DB");
require ("dotenv").config();

db_connect();

app.use("/",require("./routes/user"));
app.listen(process.env.PORT,(err)=>err? console.log(err):console.log("server is running"));

