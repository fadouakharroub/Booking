
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

 //middleware
app.use(express.json());


//database connection
mongoose.connect(
"mongodb+srv://fadoua:fadoua@cluster0.nwmvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  ,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(authRoutes);

app.listen(3000, () => {
  console.log("Server is running...");
});