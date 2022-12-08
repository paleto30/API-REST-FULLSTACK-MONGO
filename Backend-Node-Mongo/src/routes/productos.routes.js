import express from "express";
import productoController from "../controllers/producto.controller.js";



const router = express.Router();


router.get("/all",productoController.getProductos);
router.post("/add",productoController.addProducto);
router.delete("/delete/:_id",productoController.deleteProducto);



export default router;