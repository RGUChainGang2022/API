import express from "express";
import GetNGData from "./index.js";

import path from "path";

//Express setup
const app = express();

//Express routes
app.get("/api/v1", (req, res)=>{
    console.log(req.query);
    GetNGData(res);
})

app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, '/404.html'));
})

app.listen(1800, ()=>{
    console.log("API system is up and running")
})