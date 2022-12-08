import empleadoModel from "../models/empleado.js";



const getEmpleados = async (req,res)=>{
    try {
        const empleados = await empleadoModel.find();
        res.json(empleados);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

const getEmpleado = async (req,res)=>{
    try {
        let id = req.params;
        const empleado = await empleadoModel.findById(id);
        res.json(empleado); 
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addEmpleado = async (req, res)=>{
    try {
        
        const empleado = new empleadoModel(req.body);
        const result = await empleado.save();
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error)
    }
}


const deleteEmpleado = async(req,res)=>{
    try {
        let id = req.params;
        const empleado = await empleadoModel.deleteOne({_id:id});
        res.json(empleado);
    } catch (error) {
        res.send(error.message);
        res.status(500);
    }
}



const methodHTTP ={
    getEmpleados,
    getEmpleado,
    addEmpleado,
    deleteEmpleado
}


export default methodHTTP;