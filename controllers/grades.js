import Grades from "../model/grades.js";
import {Student} from "./students.js";

export let Grade = [];

for(let i = 0 ; i < Grades.length ; ++i)
{
    Grade.push(Grades[i]);
}

export const addGrade = (req,res) => {
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
        if (req.body != null)
        {
            let newObj = req.body;
            newObj["Student id"] = req.params.id;
            Grade.push(newObj);
            res.send(newObj);
        }
    }

    res.send();
}