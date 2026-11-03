import express from "express"
import cors from "cors"

import Db from "./config/db.mjs";
import router from "./routes/index.mjs"
const app = express()

app.use(cors())
app.use(express.json())
app.use ("/", router)

Db.connection
.once("open",() => console.log("connected to DB"))
.on( "error",(err)=>console.log ("error connecting to DB -->",  err));






export default app;