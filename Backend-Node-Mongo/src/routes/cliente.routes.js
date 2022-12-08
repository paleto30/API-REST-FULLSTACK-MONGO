import clienteControl from "../controllers/cliente.controller.js";
import { Router } from "express";



const router = Router();

router.get("/all",clienteControl.getCliente);
router.get("/one/:_id",clienteControl.getOneCliente);
router.post("/add",clienteControl.addCliente);
router.delete("/delete/:_id",clienteControl.deleteCliente);



export default router;