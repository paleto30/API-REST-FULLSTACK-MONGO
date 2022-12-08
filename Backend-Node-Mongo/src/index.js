/* import express from "express";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors());

app.use("/categoria", categoriasRouter);

const PORT = process.env.PORT;

conectarDB();
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
}); 
 */

import app from "./app.js";


const main = () =>{
  app.listen(app.get("port"));
  console.log(`el servidor esta corriendo el el puerto ${app.set("port")}`);
}

main()