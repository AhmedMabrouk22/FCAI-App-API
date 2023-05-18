import Departments from "../model/department.js";
import {Course} from "./courses.js";
import {Instructor} from "./instructors.js";
import {Student} from "./students.js";
const depObj = {
    "name" : "name"
}

const isValid = (obj) => {
    let a = Object.keys(depObj).sort();
    let b = Object.keys(obj).sort();
    return JSON.stringify(a) === JSON.stringify(b);
}

export let Department = [];

for(let i = 0 ; i < Departments.length ; ++i)
{
    Department.push(Departments[i]);
}

export const getDepartments = (req,res) => {
    res.send(Department);
 }

 export const getDepartmentsById = (req,res) => {
    let found = false;
    for(var dep of Department) {
        if (dep.id == req.params.id) {
            found = true;
            res.send(dep);
            break;
        }
    }
    if (!found) {
        res.status(404).send("Status: Not found");
    }
}

export const getDepartmentCourses = (req,res) => {
    
    if (req.params.id >= Department.length || req.params.id < 0) {
        res.status(404).send("Status: Not found");
    } else {
        let depName = Department[req.params.id];
        let Res  = [];
        for(let i = 0 ; i < Course.length ; ++i)
        {
            if (Course[i].Department == depName.name) {
                Res.push(Course[i]);
            }
        }
        res.send(Res);
    }


    res.send();
}

export const getDepartmentInstructors = (req,res) => {
    
    if (req.params.id >= Department.length || req.params.id < 0) {
        res.status(404).send("Status: Not found");
    } else {
        let depName = Department[req.params.id];
        let Res  = [];
        for(let i = 0 ; i < Instructor.length ; ++i)
        {
            if (Instructor[i].Department == depName.name) {
                Res.push(Instructor[i]);
            }
        }
        res.send(Res);
    }


    res.send();
}

export const getDepartmentStudents = (req,res) => {
    
    if (req.params.id >= Department.length || req.params.id < 0) {
        res.status(404).send("Status: Not found");
    } else {
        let depName = Department[req.params.id];
        let Res  = [];
        for(let i = 0 ; i < Student.length ; ++i)
        {
            if (Student[i].Department == depName.name) {
                Res.push(Student[i]);
            }
        }
        res.send(Res);
    }


    res.send();
}


export const createDep = (req,res) => {
    let obj = req.body;
    if (obj === undefined || !isValid(obj))
    {
        res.status(400).send("Status: Bad Request");
    }
    else 
    {
        let newObj = {
            "id" : Department.length,
            "name" : obj.name
        }
        Department.push(newObj);
        res.send(newObj);
    }

}

export const editeDep = (req,res) => {
    if(isValid(req.body))
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
            Department[idx].name = req.body.name;
            res.send(Department[idx]);
        }
        else 
        {
            res.status(404).send("Status: Not found");
        }

    }
    else {
        res.status(400).send("Status: Bad Request");
    }
}

export const deleteDep = (req,res) => {
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
        Department = Department.filter(st => st.id != req.params.id);
        res.send(Department);
    }
    else 
    {
        res.status(404).send("Status: Not found");
    }
    
}


