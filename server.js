const express = require('express')
const app = express();
const routes =require('./routes/user')
const mongoose = require("mongoose")
app.use(express.json())


mongoose.connect("mongolink", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

// app.get('/',(req,res)=>{
//     res.send("Server running")
// })

app.use('/',routes)

app.listen(4000, ()=>{
    console.log("Server running at port 4000")
})
