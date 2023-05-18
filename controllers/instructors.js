import Department from "../model/department.js";
import Instructors from "../model/instructors.js";

const instructorObj = {
    "id" : 0,
    "name" : "name",
    "email" : "email",
    "password" : "pass",
    "Department" : "dep"
}

const isValid = (obj) => {
    let a = Object.keys(instructorObj).sort();
    let b = Object.keys(obj).sort();
    return JSON.stringify(a) === JSON.stringify(b);
}

const mapDep = (instructor) => {
    let dep = Department[instructor.Department];
    if (dep !== undefined && parseInt(instructor.Department) < Department.length) {
        instructor.Department = dep["name"];
    }
}

export let Instructor = [];

for(let i = 0 ; i < Instructors.length ; ++i)
{
    mapDep(Instructors[i]);
    Instructor.push(Instructors[i]);
}

export const getInstructor = (req,res) => {
    res.send(Instructor);
}

export const getInstructorById = (req,res) => {
    let found = false;
    for(var instructor of Instructors)
    {
        if (instructor.id == req.params.id)
        {
            found = true;
            res.send(instructor);
            break;
        }
    }

    if (!found) {
        res.status(404).send("Status: Not found");
    }
}

export const addInstructor = (req,res) => {

    let obj = req.body;
    if (obj === undefined || !isValid(obj)) {
        res.status(400).send("Enter valid data");
    } else {
        let newObj = obj;
        if (parseInt(newObj.Department) < Department.length) {
            mapDep(newObj);
            Instructor.push(newObj);
            res.send(newObj);
        } else {
            res.status(400).send("Enter valid Department id");
        }
    }

}

export const editeInstructor = (req,res) => {
    
    if(isValid(req.body)) {
        let idx = -1;
        for(let i = 0 ; i < Instructor.length ; ++i) {
            if(Instructor[i].id == req.params.id) {
                idx = i;
                break;
            }
        }

        if (idx != -1) {
            let newObj = req.body;
            if (parseInt(newObj.Department) < Department.length) {
                newObj.id = Instructor[idx].id;
                mapDep(newObj);
                Instructor[idx] = newObj;
                res.send(newObj);
            } else {
                res.status(400).send("Enter valid Department id");
            }
        } else {
            res.status(404).send("Status: Not found");
        }

    } else {
        res.status(400).send("Enter valid data");
    }
}

export const deleteInstructor = (req,res) => {
    

    let idx = -1;
    for(let i = 0 ; i < Instructor.length ; ++i) {
        if(Instructor[i].id == req.params.id) {
            idx = i;
            break;
        }
    }

    if (idx != -1) {
        Instructor = Instructor.filter(st => st.id != req.params.id);
        res.send(Instructor);
    } else {
        res.status(404).send("Status: Not found");
    }
}