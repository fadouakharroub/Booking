
const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route');

const app = express();

 //middleware
app.use(express.json());


//database connection
mongoose.connect(
"mongodb://localhost/booking"  
 
).then(()=>{console.log('conected')});

app.use('/',route);

app.listen(3000, () => {
  console.log("Server is running...");
});