


const url = 'http://localhost:5000/api/cliente/';


export const getClientes = async()=>{
    try {
        const clientes = await fetch(`${url}/all`);
        const result = await clientes.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getCliente = async(id)=>{
    try {
        const cliente = await fetch(`${url}/one/${id}`);
        const result = await cliente.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const addNewCliente = async (cliente)=>{
    try {
        await fetch(`${url}/add`,{
            method: "POST",
            body: JSON.stringify(cliente),
            headers: {
                "Content-Type": "application/json",
            },
        }); 
    } catch (error) {
        console.log(error);
    }
};



export const deleteCliente = async (id)=>{
    try {
        await fetch(`${url}/delete/${id}`,{
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
    window.location.href = 'Cliente.html';
};
