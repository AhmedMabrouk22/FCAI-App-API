import express  from "express";
import bodyParser from "body-parser";
import AdminRouter from './routes/admin-routes.js';
import StudentRouter from "./routes/student-routes.js";
import InstructorRoute from "./routes/instructor-routes.js";
import DepartmentRoute from "./routes/department-routes.js";
import CourseRoute from "./routes/course-routes.js";
import GradeRoute from "./routes/grade-routes.js";

const app = express();
app.use(bodyParser.json());

app.use('/',AdminRouter);
app.use('/',StudentRouter);
app.use('/',InstructorRoute);
app.use('/',DepartmentRoute);
app.use('/',CourseRoute);
app.use('/',GradeRoute);

app.listen('1000',() => {
    console.log("Run");
})

app.get('/' , (req,res) => {
    res.send("FCAI API");
})


