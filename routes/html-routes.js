const path = require("path");

// Routes
module.exports = function (app) {
    // Each of the below routes just handles the HTML page that the user gets sent
    // to.
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))

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

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))

    });

};