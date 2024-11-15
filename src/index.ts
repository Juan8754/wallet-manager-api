import express from "express";
import cors from "cors";
import morgan from "morgan";
import walletsRoutes from "./routes/wallwts";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("/wallets", walletsRoutes);

app.get("/", (req, res) => {
    console.log("hola mundo");
    res.send("<div style='text-align: center; border: 3px solid green;'><h1 style='color: red; cursor: pointer'><a href='https://google.com'>hola mundo!!!</a></h1></div>");
})

app.listen(3000, () => {
    console.log("servar activo!");
})