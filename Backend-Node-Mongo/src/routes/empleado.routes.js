import empleadoControl from "../controllers/empleado.controller.js";
import Router from "express";



const router = Router();


router.get("/all", empleadoControl.getEmpleados);
router.get("/one/:_id",empleadoControl.getEmpleado);
router.post("/add", empleadoControl.addEmpleado);
router.delete("/delete/:_id",empleadoControl.deleteEmpleado);



export default router;


