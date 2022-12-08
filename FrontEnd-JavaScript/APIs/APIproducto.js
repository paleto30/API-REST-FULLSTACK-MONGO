

const url = 'http://localhost:5000/api/producto/';


export const getProductos = async()=>{
    try {
        const producto = await fetch(`${url}/all`);
        const result = await producto.json(producto);
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const addNewProduct = async (producto)=>{
    try {
        await fetch(`${url}/add`,{
            method: "POST",
            body: JSON.stringify(producto),
            headers: {
                "Content-Type": "application/json",
            },
        }); 
    } catch (error) {
        console.log(error);
    }
    window.location.href = "productos.html"
};



export const deleteProduct = async (id)=>{
    try {
        await fetch(`${url}/delete/${id}`,{
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
    window.location.href = "productos.html";
};




const urlC = `http://localhost:5000/api/categoria/`

export const getCategorias = async ()=>{

    try {
        const connection = await fetch(`${urlC}/all`);
        const result = await connection.json();
        return result 
    } catch (error) {
        console.log({"MsgError":"error en el GETcategoria de la api Productos"},error);
    }
};