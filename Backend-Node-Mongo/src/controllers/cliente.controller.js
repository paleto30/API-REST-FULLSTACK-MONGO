import ClienteModel from "../models/cliente.js";



const getCliente = async (req,res)=>{
    try {
        const cliente = await ClienteModel.find();
        res.json(cliente);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


const getOneCliente = async (req,res)=>{
    try {
        let id = req.params;
        const cliente = await ClienteModel.findOne({_id:id});
        res.json(cliente); 
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const addCliente = async (req, res)=>{
    try {
        
        const cliente = new ClienteModel(req.body);
        const result = await cliente.save();
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error)
    }
}


const deleteCliente = async(req,res)=>{
    try {
        let id = req.params;
        const cliente = await ClienteModel.deleteOne({_id:id});
        res.json(cliente);
    } catch (error) {
        res.send(error.message);
        res.status(500);
    }
}



const methodHTTP ={
    getCliente,
    addCliente,
    deleteCliente,
    getOneCliente
}


export default methodHTTP;