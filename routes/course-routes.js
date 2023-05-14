import express from 'express';
import Cources from '../model/Course.js';

const app = express.Router();

let Course = [];

for(let i = 0 ; i < Cources.length ; ++i)
{
    Course.push(Cources[i]);
}


// Course

app.get("/course",(req,res) => {
    res.send(Course);
 })
 
app.get('/course/:id',(req,res) => {
    for(var course of Course)
    {
        if (course.id == req.params.id)
        {
            res.send(course);
        }
    }
})

app.post('/course',(req,res) => {
    if (req.body != null)
    {
        Course.push(req.body);
        res.send(req.body);
    }
})

app.put('/course/:id',(req,res) => {
    if(req.body != null)
    {
        let idx = -1;
        for(let i = 0 ; i < Course.length ; ++i)
        {
            if(Course[i].id == req.params.id)
            {
                idx = i;
                break;
            }
        }

        if (idx != -1)
        {
            Course[idx] = req.body;
            res.send(req.body);
        }

    }
})  

app.delete('/course/:id',(req,res) => {
    Course = Course.filter(st => st.id != req.params.id);
    res.send(Course);
})

export default app;