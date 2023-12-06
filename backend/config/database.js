// const bodyParser = require('body-parser');
// const express = require('express');
const mongoose = require("mongoose");
// const app = express();

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(express.json())
// zxlClqBKcurlxj1s
// utkarshtiwari200389

const connectDatabase = () => {
  // Mongo DB Connections

  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((response) => {
      console.log(`MongoDB Connection Succeeded. ${response.connection.host}`);
    })
    .catch((error) => {
      console.log("Error in DB connection: " + error);
    });
};

module.exports = connectDatabase;
