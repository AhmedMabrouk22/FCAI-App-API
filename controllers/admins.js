import Admins from "../model/admins.js";

let Admin = [];
for(let i = 0 ; i < Admins.length ; ++i)
{
    Admin.push(Admins[i]);
}

const adminObj = {
    "id" : "id",
    "name" : "name",
    "email" : "email",
    "password" : "pas"
}

const isValid = (obj) => {
    let a = Object.keys(adminObj).sort();
    let b = Object.keys(obj).sort();
    return JSON.stringify(a) === JSON.stringify(b);
}

export const getAdmins = (req,res) => {
    res.send(Admin);
}

export const getAdminById = (req,res) => {
    let found = false;
    for(var ad of Admin)
    {
        if (ad.id == req.params.id)
        {
            found = true;
            res.send(ad);
            break;
        }
    }

    if (!found) {
        res.status(404).send("Status: Not found");
    }
}

export const createAdmin = (req,res) => {

    let obj = req.body;
    if (obj === undefined || !isValid(obj)) {
        res.status(400).send("Enter valid data");
    } else {
        let newObj = obj;
            Admin.push(newObj);
            res.send(newObj);
    }

}

export const editeAdmin = (req,res) => {
    
    if(isValid(req.body)) {
        let idx = -1;
        for(let i = 0 ; i < Admin.length ; ++i) {
            if(Admin[i].id == req.params.id) {
                idx = i;
                break;
            }
        }

        if (idx != -1) {
            let newObj = req.body;
            if (newObj.Department == "" || parseInt(newObj.Department) < Department.length) {
                newObj.id = Admin[idx].id;
                mapDep(newObj);
                Admin[idx] = newObj;
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

export const deleteAdmin = (req,res) => {
    

    let idx = -1;
    for(let i = 0 ; i < Admin.length ; ++i) {
        if(Admin[i].id == req.params.id) {
            idx = i;
            break;
        }
    }

    if (idx != -1) {
        Admin = Admin.filter(st => st.id != req.params.id);
        res.send(Admin);
    } else {
        res.status(404).send("Status: Not found");
    }
}
