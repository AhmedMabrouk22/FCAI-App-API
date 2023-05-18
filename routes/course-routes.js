import express from 'express';
import { getCourses,getCourseById, createCourse,editeCourse,deleteCourse } from '../controllers/courses.js';

const app = express.Router();

// Course

app.get("/course",getCourses)
 
app.get('/course/:id',getCourseById)

app.post('/course',createCourse)

app.put('/course/:id',editeCourse)  

app.delete('/course/:id',deleteCourse)

export default app;