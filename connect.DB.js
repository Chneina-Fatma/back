const mongoose=require("mongoose");
const db_connect=async()=>{
    try {
        const result=await mongoose.connect(process.env.DB_URI);
        // ("mongodb+srv://chneinachneina:fattoumadatabase@cluster0.igxbbob.mongodb.net/")
        console.log("data is connected")
    } catch (error) {
        console.log(err)
    }
}

module.exports=db_connect;