import express from "express";
import {getAdmins,getAdminById,createAdmin,editeAdmin,deleteAdmin} from "../controllers/admins.js";
const app = express.Router();


// Admin
app.get("/admin",getAdmins)
 
 app.get('/admin/:id',getAdminById)

app.post('/admin',createAdmin)

app.put('/admin/:id',editeAdmin)  

app.delete('/admin/:id',deleteAdmin)


export default app;
