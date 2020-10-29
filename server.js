const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");

const { Workout } = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(logger("dev"));

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
app.get("/api/workouts", (req, res) => {

  Workout.find({}, function (err, results) {
    if (err) {
      res.send(error);
    } else {
      res.send(results);
    }
  })
});

// app.put("/exercise", (req, res) => {
//   Workout.update({
//     _id: mongojs.ObjectID(req.params.id)
//   },
//     {
//       $set: {
//         exerciseType: req.params.type,
//         name: req.params.name,
//         weight: req.params.weight,
//         sets: req.params.sets,
//         reps: req.params.reps,
//         duration: req.params.duration

//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         console.log(data);
//         res.send(data);
//       };
//     }
//   )
// });

app.get("/exercise", (req, res) => {
  res.redirect("exercise.html");

  //   Workout.find({
  //   "exercises.type": { $in: ["cardio", "resistance"] }
  // }, 
  // function (err, results) {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     console.log(results)
  //     res.json(results);
  //   }
  // })


});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
