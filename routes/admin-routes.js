import express from "express";
import Admins from "../model/admins.js";

const app = express.Router();

let Admin = [];
for(let i = 0 ; i < Admins.length ; ++i)
{
    Admin.push(Admins[i]);
}

// Admin
app.get("/admin",(req,res) => {
    res.send(Admin);
 })
 
 app.get('/admin/:id',(req,res) => {
    for(var admin of Admin)
    {
        if (admin.id == req.params.id)
        {
            res.send(admin);
        }
    }
})

app.post('/admin',(req,res) => {
    if (req.body != null)
    {
        Admin.push(req.body);
        res.send(req.body);
    }
})

app.put('/admin/:id',(req,res) => {
    if(req.body != null)
    {
        let idx = -1;
        for(let i = 0 ; i < Admin.length ; ++i)
        {
            if(Admins[i].id == req.params.id)
            {
                idx = i;
                break;
            }
        }

        if (idx != -1)
        {
            Admin[idx] = req.body;
            res.send(req.body);
        }

    }
})  

app.delete('/admin/:id',(req,res) => {
    Admin = Admin.filter(admin => admin.id != req.params.id);
    res.send(Admin);
})


export default app;
