import Router from "express";
import controlCategoria from "../controllers/categorias.controller.js";

const router = Router();

router.get("/all", controlCategoria.obtenerCategorias);
router.post("/add", controlCategoria.agregarCategoria);
router.delete("/delete/:_id", controlCategoria.deleteCategoria);


export default router;