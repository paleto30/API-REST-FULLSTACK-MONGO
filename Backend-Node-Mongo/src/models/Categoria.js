
import mongoose from "mongoose";


const categoriaSchema = mongoose.Schema(
  {
    nombre: { 
      type: String, 
      required: true,
      trim: true, 
    },
    imagen: { 
      type: String, 
      required: true, 
      trim: true, 
    },
    descripcion: { 
      type: String, 
      required: true, 
      trim: true, 
    },
  },
  {
    versionKey: false,
  }

);

const Categoria = mongoose.model("categorias", categoriaSchema);

export default Categoria;