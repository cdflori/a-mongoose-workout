const db = require("../models");

module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.findByIDAndUpdate(req.params.id,
      { $push: { exercises: req.body } }).then(dbWorkout => {
        res.json(dbWorkout);
      });
  });

  app.post("/api/workouts", (req, res) => {
    dbWorkout.create(req.body, (error, success) => {
      if (error) throw error;
      res.json(success);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.workout.find({}).limit(7).then(dbWorkout => {
      res.json(dbWorkout);
    });
  });

}

// const API = {
//   async getLastWorkout() {
//     let res;
//     try {
//       res = await fetch("/api/workouts");
//     } catch (err) {
//       console.log(err)
//     }
//     const json = await res.json();

//     return json[json.length - 1];
//   },
//   async addExercise(data) {
//     const id = location.search.split("=")[1];

//     const res = await fetch("/api/workouts/" + id, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     });

//     const json = await res.json();

//     return json;
//   },
//   async createWorkout(data = {}) {
//     const res = await fetch("/api/workouts", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" }
//     });

//     const json = await res.json();

//     return json;
//   },

//   async getWorkoutsInRange() {
//     const res = await fetch(`/api/workouts/range`);
//     const json = await res.json();

//     return json;
//   },
// };
