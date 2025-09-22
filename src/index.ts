import { Query } from "pg";
import pool from "./database/database.js";


const testConnection = async() =>{
    try{
        const res = await pool.query("SELECT NOW()");
        console.log("Database connected successfully at", res.rows[0].now);
    }catch(error){
        console.error("Error connecting to database", error);
        process.exit(1);
    }
}

testConnection();

