import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
    console.log("hola mundo");
    res.send("hola mundo!!!");
})

app.listen(3000, () => {
    console.log("servar activo!");
})