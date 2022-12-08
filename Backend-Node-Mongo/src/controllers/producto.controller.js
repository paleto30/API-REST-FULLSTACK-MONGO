
import ProductoModel from "../models/producto.js";



const getProductos = async (req,res)=>{
    try {
        const productos = await ProductoModel.find();
        res.json(productos);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


const addProducto = async (req, res)=>{
    try {
        
        const producto = new ProductoModel(req.body);
        const result = await producto.save();
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error)
    }
}


const deleteProducto = async(req,res)=>{
    try {
        let id = req.params;
        const producto = await ProductoModel.deleteOne({_id:id});
        res.json(producto);
    } catch (error) {
        res.send(error.message);
        res.status(500);
    }
}



const methodHTTP ={
    getProductos,
    addProducto,
    deleteProducto
}


export default methodHTTP;