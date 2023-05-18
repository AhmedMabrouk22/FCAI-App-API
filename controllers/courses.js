import Cources from '../model/Course.js';
import Department from "../model/department.js";


const courseObj = {
    "id" : "id",
    "name" : "name",
    "Department" : "dep"
}

const isValid = (obj) => {
    let a = Object.keys(courseObj).sort();
    let b = Object.keys(obj).sort();
    return JSON.stringify(a) === JSON.stringify(b);
}

const mapDep = (course) => {
    let dep = Department[course.Department];
    if (dep !== undefined && parseInt(course.Department) < Department.length) {
        course.Department = dep["name"];
    }
}


export let Course = [];
export let CourseId = new Map();

for(let i = 0 ; i < Cources.length ; ++i)
{
    mapDep(Cources[i]);
    Course.push(Cources[i]);
    CourseId.set(Course[i].id,Cources[i]);
}

export const getCourses = (req,res) => {
    res.send(Course);
}

export const getCourseById = (req,res) => {
    let found = false;
    for(var course of Course)
    {
        if (course.id == req.params.id)
        {
            found = true;
            res.send(course);
            break;
        }
    }

    if (!found) {
        res.status(404).send("Status: Not found");
    }
}

export const createCourse = (req,res) => {

    let obj = req.body;
    if (obj === undefined || !isValid(obj)) {
        res.status(400).send("Enter valid data");
    } else {
        let newObj = obj;
        if (newObj.Department == "" || parseInt(newObj.Department) < Department.length) {
            mapDep(newObj);
            Course.push(newObj);
            res.send(newObj);
        } else {
            res.status(400).send("Enter valid Department id");
        }
    }

}

export const editeCourse = (req,res) => {
    
    if(isValid(req.body)) {
        let idx = -1;
        for(let i = 0 ; i < Course.length ; ++i) {
            if(Course[i].id == req.params.id) {
                idx = i;
                break;
            }
        }

        if (idx != -1) {
            let newObj = req.body;
            if (newObj.Department == "" || parseInt(newObj.Department) < Department.length) {
                newObj.id = Course[idx].id;
                mapDep(newObj);
                Course[idx] = newObj;
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

export const deleteCourse = (req,res) => {
    

    let idx = -1;
    for(let i = 0 ; i < Course.length ; ++i) {
        if(Course[i].id == req.params.id) {
            idx = i;
            break;
        }
    }

    if (idx != -1) {
        Course = Course.filter(st => st.id != req.params.id);
        res.send(Course);
    } else {
        res.status(404).send("Status: Not found");
    }
}