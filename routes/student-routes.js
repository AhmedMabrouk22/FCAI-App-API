import express from "express";
import {getStudent,getStudentById,addStudent,editeStudent,deleteStudent,getStudentCourses} from "../controllers/students.js";

const app = express.Router();


// Student

app.get("/student",getStudent)
 
app.get('/student/:id',getStudentById)

app.get('/student/:id/courses',getStudentCourses)

app.post('/student',addStudent)

app.put('/student/:id',editeStudent)  

app.delete('/student/:id',deleteStudent)

export default app;