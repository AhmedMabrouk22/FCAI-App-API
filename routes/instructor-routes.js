import express  from "express";
import {getInstructor , getInstructorById,addInstructor,editeInstructor,deleteInstructor} from "../controllers/instructors.js";
const app = express.Router();

// Instructor

app.get("/instructor",getInstructor)
 
app.get('/instructor/:id',getInstructorById)

app.post('/instructor',addInstructor)

app.put('/instructor/:id',editeInstructor)  

app.delete('/instructor/:id',deleteInstructor)

export default app;