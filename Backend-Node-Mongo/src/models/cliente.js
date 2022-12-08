import mongoose from "mongoose";


const ClienteSchema = mongoose.Schema(
    
    {
        nombre:{
            type : String, 
                required: true, trim: true
        },

        documento:{
            type: String, 
                required: true, trim: true
        },

        foto:{
            type: String, 
                required: true, trim: true
        },

        correo:{
            type: String, 
                required: true, trim: true
        },

        telefono:{
            type: String, 
                required: true, trim: true
        },

        direccion:{
            type: String, 
                required: true, trim: true
        }  
    },{versionKey:false}
);



const ClienteModel = mongoose.model("clientes",ClienteSchema);


export default ClienteModel;