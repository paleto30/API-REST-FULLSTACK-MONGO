import mongoose from "mongoose";

const productoSchema = mongoose.Schema(

    {
        nombre:{
            type: String,
            required: true,
            trim: true
        },
        imagen: {
            type: String,
            required: true,
            trim: true,
          },
        
        categoria:{
          type: String,
          required: true,
          trim: true
        },
        descripcion: {
            type: String,
            required: true,
            trim: true,
          },
        precio:{
          type: String,
          required: true,
          trim: true
        }
        },
        {
          versionKey:false,
        }
)

const ProductoModel = mongoose.model("productos",productoSchema);

export default ProductoModel;