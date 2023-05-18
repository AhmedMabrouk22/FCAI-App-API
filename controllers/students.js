import Department from "../model/department.js";
import Students from "../model/students.js";
import {Grade} from "./grades.js";
const studentObj = {
    "id" : 0,
    "name" : "name",
    "email" : "email",
    "password" : "password",
    "level" : "level",
    "Department" : "dep"
}

const isValid = (obj) => {
    let a = Object.keys(studentObj).sort();
    let b = Object.keys(obj).sort();
    return JSON.stringify(a) === JSON.stringify(b);
}

const mapDep = (st) => {
    let dep = Department[st.Department];
    if (dep !== undefined && parseInt(st.Department) < Department.length) {
        st.Department = dep["name"];
    }
}

export let Student = [];

for(let i = 0 ; i < Students.length ; ++i)
{
    mapDep(Students[i]);
    Student.push(Students[i]);
}


export const getStudent = (req,res) => {
    res.send(Student);
}

export const getStudentById = (req,res) => {
    let found = false;
    for(var st of Student)
    {
        if (st.id == req.params.id)
        {
            found = true;
            res.send(st);
            break;
        }
    }

    if (!found) {
        res.status(404).send("Status: Not found");
    }
}

export const getStudentCourses = (req,res) => {
    let idx = -1;
    for(let i = 0 ; i < Student.length ; ++i)
    {
        if (req.params.id == Student[i].id) {
            idx = i;
            break;
        }
    }
    if (idx == -1) {
        res.status(404).send("Status: Not found");
    } else {
        let stID = Student[req.params.id];
        let Res  = [];
        for(let i = 0 ; i < Grade.length ; ++i)
        {
            if (Grade[i]["Student id"] == stID.id) {
                Res = Grade[i]["cources"];
            }
        }
        res.send(Res);
    }

    res.send();
}

export const addStudent = (req,res) => {

    let obj = req.body;
    if (obj === undefined || !isValid(obj)) {
        res.status(400).send("Enter valid data");
    } else {
        let newObj = obj;
        if (parseInt(newObj.Department) < Department.length) {
            mapDep(newObj);
            Student.push(newObj);
            res.send(newObj);
        } else {
            res.status(400).send("Enter valid Department id");
        }
    }

}

export const editeStudent = (req,res) => {
    
    if(isValid(req.body)) {
        let idx = -1;
        for(let i = 0 ; i < Student.length ; ++i) {
            if(Student[i].id == req.params.id) {
                idx = i;
                break;
            }
        }

        if (idx != -1) {
            let newObj = req.body;
            if (parseInt(newObj.Department) < Department.length) {
                newObj.id = Student[idx].id;
                mapDep(newObj);
                Student[idx] = newObj;
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

export const deleteStudent = (req,res) => {
    

    let idx = -1;
    for(let i = 0 ; i < Student.length ; ++i) {
        if(Student[i].id == req.params.id) {
            idx = i;
            break;
        }
    }

    if (idx != -1) {
        Student = Student.filter(st => st.id != req.params.id);
        res.send(Student);
    } else {
        res.status(404).send("Status: Not found");
    }
}