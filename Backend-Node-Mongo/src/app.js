import express from "express";
import conectarDB from "./config/config.js";
import dotenv from "dotenv";
import cors from "cors";

// imports de los controladorew
import categoriasRouter from "./routes/categorias.routes.js";
import productoRoutes from  "./routes/productos.routes.js";
import empleadoRoutes from "./routes/empleado.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
// llamar la conexion
conectarDB();



const PORT = process.env.PORT;
app.set("port",PORT);



app.use("/api/categoria", categoriasRouter);
app.use("/api/producto", productoRoutes);
app.use("/api/empleado",empleadoRoutes);
app.use("/api/cliente",clienteRoutes);



/* 
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});  */

export default  app;