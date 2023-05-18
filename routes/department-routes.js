import express from "express";
import {getDepartments , getDepartmentsById,createDep,editeDep,deleteDep,getDepartmentCourses,getDepartmentInstructors,getDepartmentStudents} from "../controllers/departments.js";

const app = express.Router();

// Department

app.get("/department",getDepartments)
 
app.get('/department/:id',getDepartmentsById)

// get department courses
app.get('/department/:id/courses',getDepartmentCourses)

app.get('/department/:id/instructors',getDepartmentInstructors)

app.get('/department/:id/students',getDepartmentStudents)

app.post('/department',createDep)

app.put('/department/:id',editeDep)  

app.delete('/department/:id',deleteDep)

export default app;