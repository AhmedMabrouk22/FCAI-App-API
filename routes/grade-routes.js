import express from "express";
import {addGrade} from "../controllers/grades.js";
const app = express.Router();

// Grade

app.post('/grade/:id/',addGrade)

export default app;