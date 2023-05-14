import express from "express";
import Departments from "../model/department.js";

const app = express.Router();

let Department = [];

for(let i = 0 ; i < Departments.length ; ++i)
{
    Department.push(Departments[i]);
}


// Department

app.get("/department",(req,res) => {
    res.send(Department);
 })
 
app.get('/department/:id',(req,res) => {
    for(var Department of Departments)
    {
        if (Department.id == req.params.id)
        {
            res.send(Department);
        }
    }
})

app.post('/department',(req,res) => {
    if (req.body != null)
    {
        Department.push(req.body);
        res.send(req.body);
    }
})

app.put('/department/:id',(req,res) => {
    if(req.body != null)
    {
        let idx = -1;
        for(let i = 0 ; i < Department.length ; ++i)
        {
            if(Department[i].id == req.params.id)
            {
                idx = i;
                break;
            }
        }

        if (idx != -1)
        {
            Department[idx] = req.body;
            res.send(req.body);
        }

    }
})  

app.delete('/department/:id',(req,res) => {
    Department = Department.filter(st => st.id != req.params.id);
    res.send(Department);
})

export default app;