import express from "express";
import Grades from "../model/grades.js";

const app = express.Router();

let Grade = [];

for(let i = 0 ; i < Grades.length ; ++i)
{
    Grade.push(Grades[i]);
}


// Grade

app.get("/grade",(req,res) => {
    res.send(Grade);
 })
 
app.get('/grade/:id',(req,res) => {
    for(var Grade of Grades)
    {
        if (Grade["Student id"] == req.params.id)
        {
            res.send(Grade);
        }
    }
})

app.post('/grade',(req,res) => {
    if (req.body != null)
    {
        Grade.push(req.body);
        res.send(req.body);
    }
})

app.put('/grade/:id',(req,res) => {
    if(req.body != null)
    {
        let idx = -1;
        for(let i = 0 ; i < Grade.length ; ++i)
        {
            if(Grade[i]["Student id"] == req.params.id)
            {
                idx = i;
                break;
            }
        }

        if (idx != -1)
        {
            Grade[idx] = req.body;
            res.send(req.body);
        }

    }
})  

app.delete('/grade/:id',(req,res) => {
    Grade = Grade.filter(st => st.id != req.params.id);
    res.send(Grade);
})

export default app;