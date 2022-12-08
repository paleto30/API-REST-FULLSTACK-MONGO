


const url = 'http://localhost:5000/api/empleado/';


export const getEmpleados = async()=>{
    try {
        const empleado = await fetch(`${url}/all`);
        const result = await empleado.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getEmpleado = async(id)=>{
    try {
        const empleado = await fetch(`${url}/one/${id}`);
        const result = await empleado.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const addNewEmpleado = async (empleado)=>{
    try {
        await fetch(`${url}/add`,{
            method: "POST",
            body: JSON.stringify(empleado),
            headers: {
                "Content-Type": "application/json",
            },
        }); 
    } catch (error) {
        console.log(error);
    }
};



export const deleteEmpleado = async (id)=>{
    try {
        await fetch(`${url}/delete/${id}`,{
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
    window.location.href = 'empleados.html';
};
