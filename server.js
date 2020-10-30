const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");

const { Workout } = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

require("./routes/html-routes.js")(app);
// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// ===============================================================
// retrieve all workouts
app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err)
    });

});



app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err)
    });
});
//  Currently nothing updates in database, I will revisit this part ==========================================================
app.put("/api/workouts/:id", ({ params, body }, res) => {
  console.log(params);
  Workout.findByIdAndUpdate(params.id, { $push: { exercises : body } }, { new: true })
    .then((newWorkout) => {
      console.log(body)
      console.log(newWorkout)
      console.log(params)
      // newWorkout.exercises.push(body);s
      res.json(newWorkout)



    })
    .catch((err) => {
      console.log(err);

    });

});
// =====================================================================================================================================
app.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then(newWorkout => {
      res.json(newWorkout);

    })
    .catch((err) => {
      res.json(err)
    });

});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
