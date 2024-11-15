import app from "./app";
import { AppDataSource } from "./db/conection";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("db connected!");

        app.listen(3000, () => {
            console.log("servar activo!");
        })
    } catch(err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}

main();