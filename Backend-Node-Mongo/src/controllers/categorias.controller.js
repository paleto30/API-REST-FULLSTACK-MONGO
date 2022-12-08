
import Categoria from "../models/Categoria.js";


const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
};



const agregarCategoria = async (req, res) => {
  try {
    const categoria = new Categoria(req.body);  
    const resultado = await categoria.save();
    res.json(resultado); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};



const deleteCategoria = async(req,res)=>{
  try {

    let id = req.params;
    const categoria = await Categoria.deleteOne({_id:id});
    res.json(categoria)
    console.log("id de la categoria que se borro: ",id); 
  } catch (error) {
    console.log(error);
  }
}


const methodHTTP ={
  obtenerCategorias, 
  agregarCategoria,
  deleteCategoria
} 
export default methodHTTP;