import{
    addNewCliente,
    deleteCliente,
    getCliente,
    getClientes
} from "../APIs/APIcleinte.js";;



document.addEventListener('DOMContentLoaded',()=>{

    getAllClientes();
})



async function getAllClientes() {

    const clientes = await getClientes();
    //console.log(clientes);
    const content = document.querySelector("#content");
    let html = '';
    let cantidad = 0
    clientes.forEach(element => {
        const {_id,nombre,documento,foto,correo,telefono,direccion} = element;
        html +=`
        <tr class="trr">
            <th scope="row">${cantidad+1}</th>
            <td>${documento}</td>
            <td>${nombre}</td>
            <td>${telefono}</td>
            <td>${correo}</td>
            <td>
                <a href="" class="btn btn-outline-danger botonesT eliminar" idCliente="${_id}" data-cliente="${_id}">
                    <img src="img/bin.png" class="imgT eliminar" alt="" data-cliente="${_id}" idCliente="${_id}">
                </a>
                <a href="" class="btn btn-outline-info botonesT detalles" data-cliente="${_id}" idCliente="${_id}" data-toggle="modal" data-target="#exampleModalDetalles">
                    <img src="img/loupe.png" class="imgT detalles" alt="" idCliente="${_id}" data-cliente="${_id}" data-toggle="modal" data-target="#exampleModalDetalles">
                </a>
            </td>
        </tr>
        `;
        content.innerHTML = html; 
        cantidad += 1;
    }); 
}



const formulario = document.querySelector("#formularioC");
formulario.addEventListener('submit',confirmNewCLiente);


async function confirmNewCLiente(e) {
    
    const nombre = document.querySelector("#nombre").value;
    const documento = document.querySelector("#cedula").value;
    const foto = document.querySelector("#foto").value;
    const correo = document.querySelector("#correo").value;
    const telefono = document.querySelector("#telefono").value;
    const direccion = document.querySelector("#direccion").value;

    const cliente = {
        nombre,
        documento,
        foto,
        correo,
        telefono,
        direccion,
    }
    console.log(cliente);
    const confirmar = confirm("¿ Agregar el Registro ?");
    if (confirmar) {
        await addNewCliente(cliente);
    } 
}


// ELIMINAR 
const tablas = document.querySelector("#content");

tablas.addEventListener('click', confirmDelete);

async function confirmDelete(e) {
    //console.log(e.target.classList.contains("eliminar"));
    if (e.target.classList.contains("eliminar")) {
      const id = e.target.dataset.cliente;
      //console.log(id);
      const confirma = confirm("¿Desea eliminar este Registro?");
      if (confirma) {
          await deleteCliente(id);
      }    
    } 
};



// mostrar detalles de acusado
const tablaD =  document.querySelector("#content");
tablaD.addEventListener('click', lookDetail);

async function lookDetail(e) {
    console.log(e.target.classList.contains("detalles"));
    if (e.target.classList.contains("detalles")) {
        const idCliente = { 
            id : e.target.getAttribute("idCliente")
        }
        const cliente = await getCliente(idCliente.id);
        console.log("cliente",cliente);
        let html = '';
        const modalData = document.querySelector("#modaldetails")
        html =`
            <div class="card mb-3" style="max-width: 100%;">
            <div class="row no-gutters">
            <div class="col-md-4">
                <img src="img/clientes/${cliente.foto}" alt="..." style="width: 240px">
            </div>
            <div class="col-md-8">
                <div class="card-body cardD">
                <h2 class="card-title">${cliente.nombre}</h2>
                <p class="card-text"><strong>Cedula</strong>: ${cliente.documento}</p>
                <p class="card-text"><strong>Correo</strong>: ${cliente.correo}</p>
                <p class="card-text"><strong>Telefono</strong>: ${cliente.telefono}</p>
                <p class="card-text"><strong>Direccion</strong>: ${cliente.direccion}</p>
                </div>
            </div>
            </div>
        </div>
            `;
        modalData.innerHTML = html;
    } 
};  