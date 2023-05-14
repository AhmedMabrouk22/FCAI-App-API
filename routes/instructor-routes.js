import express  from "express";
import Instructors from "../model/instructors.js";

const app = express.Router();

let Instructor = [];

for(let i = 0 ; i < Instructors.length ; ++i)
{
    Instructor.push(Instructors[i]);
}


// Instructor

app.get("/instructor",(req,res) => {
    res.send(Instructor);
 })
 
app.get('/instructor/:id',(req,res) => {
    for(var instructor of Instructor)
    {
        if (instructor.id == req.params.id)
        {
            res.send(instructor);
        }
    }
})

app.post('/instructor',(req,res) => {
    if (req.body != null)
    {
        Instructor.push(req.body);
        res.send(req.body);
    }
})

app.put('/instructor/:id',(req,res) => {
    if(req.body != null)
    {
        let idx = -1;
        for(let i = 0 ; i < Instructor.length ; ++i)
        {
            if(Instructor[i].id == req.params.id)
            {
                idx = i;
                break;
            }
        }

        if (idx != -1)
        {
            Instructor[idx] = req.body;
            res.send(req.body);
        }

    }
})  

app.delete('/instructor/:id',(req,res) => {
    Instructor = Instructor.filter(st => st.id != req.params.id);
    res.send(Instructor);
})

export default app;