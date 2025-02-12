const express=require("express")
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}= require("../controllers/workoutController")

const router = express.Router()

//GET all Workouts
router.get('/', getWorkouts)

//GET a single Workouts
router.get('/:id',getWorkout)

//Post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',deleteWorkout)

//update a workout
router.patch('/:id',updateWorkout)


module.exports=router
