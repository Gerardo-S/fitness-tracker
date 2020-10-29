const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const { Workout } = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// ===============================================================
// retrieve all workouts
app.get("/api/workouts",(req, res)=>
{
  Workout.find({}, function (err, results){
    if(err){
      res.send(error);
    }else{
      res.send(results);
    }
  })
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
