const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
"mongodb+srv://fadoua:fadoua@cluster0.nwmvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"  ,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});