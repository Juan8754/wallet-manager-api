import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../models/userModel";
import { Wallet } from "../models/walletModel";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    logging: true,
    entities: [User, Wallet],
    synchronize: false,
    // subscribers: [],
    // migrations: [],
})