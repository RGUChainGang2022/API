import express from "express";
import GetNGData from "./index.js";
const app = express();

app.get("/api/v1", (req, res)=>{
    GetNGData(res);
})

app.listen(1800, ()=>{
    console.log("API system is up and running")
})