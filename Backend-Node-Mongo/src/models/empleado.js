import mongoose from "mongoose";


const empleadoSchema = mongoose.Schema(
    
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
        },
        
        cargo:{
            type: String, 
                required: true, trim: true
        }
    
    },{versionKey:false}
);



const empleadoModel = mongoose.model("empleados",empleadoSchema);


export default empleadoModel;