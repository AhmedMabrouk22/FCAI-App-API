import express from "express";
import Students from "../model/students.js";

const app = express.Router();

let Student = [];

for(let i = 0 ; i < Students.length ; ++i)
{
    Student.push(Students[i]);
}


// Student

app.get("/student",(req,res) => {
    res.send(Student);
 })
 
app.get('/student/:id',(req,res) => {
    for(var student of Student)
    {
        if (student.id == req.params.id)
        {
            res.send(student);
        }
    }
})

app.post('/student',(req,res) => {
    if (req.body != null)
    {
        Student.push(req.body);
        res.send(req.body);
    }
})

app.put('/student/:id',(req,res) => {
    if(req.body != null)
    {
        let idx = -1;
        for(let i = 0 ; i < Student.length ; ++i)
        {
            if(Student[i].id == req.params.id)
            {
                idx = i;
                break;
            }
        }

        if (idx != -1)
        {
            Student[idx] = req.body;
            res.send(req.body);
        }

    }
})  

app.delete('/student/:id',(req,res) => {
    Student = Student.filter(st => st.id != req.params.id);
    res.send(Student);
})

export default app;