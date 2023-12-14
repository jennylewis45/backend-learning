// const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://javeriya:12345678wed@signup.wwfwwew.mongodb.net/?retryWrites=true&w=majority")

// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// })


// const newSchema=new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const collection = mongoose.model("collection",newSchema)

// module.exports=collection

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://jaweria:12332111@signup.wwfwwew.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
