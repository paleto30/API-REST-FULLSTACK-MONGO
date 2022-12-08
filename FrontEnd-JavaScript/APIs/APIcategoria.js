

const url = `http://localhost:5000/api/categoria/`


export const obtenerCategorias = async ()=>{

    try {
        const connection = await fetch(`${url}/all`);
        const result = await connection.json();
        return result 
    } catch (error) {
        console.log(error);
    }
}


export const addNewCategory = async (categoria)=>{
    try {
        await fetch(`${url}/add`,{
            method: "POST",
            body: JSON.stringify(categoria),
            headers: {
                "Content-Type": "application/json",
            },
        }); 
    } catch (error) {
        console.log(error);
    }
    window.location.href = "index.html"
};


export const deleteCategoria = async (id)=>{
    try {
        await fetch(`${url}/delete/${id}`,{
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
    window.location.href = "index.html";
}