import{
    getEmpleados,
    getEmpleado,
    addNewEmpleado,
    deleteEmpleado
} from "../APIs/APIempleado.js";



document.addEventListener('DOMContentLoaded',()=>{

    getAllEmpleados();
})



async function getAllEmpleados() {

    const empleados = await getEmpleados();
    //console.log(empleados);
    const content = document.querySelector("#content");
    let html = '';
    let cantidad = 0
    empleados.forEach(element => {
        const {_id,nombre,documento,foto,correo,telefono,direccion,cargo} = element;
        html +=`
        <tr class="trr">
            <th scope="row">${cantidad+1}</th>
            <td>${documento}</td>
            <td>${nombre}</td>
            <td>${telefono}</td>
            <td>${cargo}</td>
            <td>
                <a href="" class="btn btn-outline-danger botonesT eliminar" idEmpleado="${_id}" data-empleado="${_id}">
                    <img src="img/bin.png" class="imgT eliminar" alt="" idEmpleado="${_id}" data-empleado="${_id}">
                </a>
                <a href="" class="btn btn-outline-info botonesT detalle" data-empleado="${_id}" idEmpleado="${_id}" data-toggle="modal" data-target="#exampleModalDetalle">
                    <img src="img/loupe.png" class="imgT detalle" alt="" idEmpleado="${_id}" data-empleado="${_id}" data-toggle="modal" data-target="#exampleModalDetalle">
                </a>
            </td>
        </tr>
        `;
        content.innerHTML = html; 
        cantidad += 1;
    });
}



const formulario = document.querySelector("#formularioE");
formulario.addEventListener('submit',confirmNewEmpleado);

async function confirmNewEmpleado(e) {
    e.preventDafault();
    const nombre = document.querySelector("#nombre").value;
    const documento = document.querySelector("#cedula").value;
    const foto = document.querySelector("#foto").value;
    const correo = document.querySelector("#correo").value;
    const telefono = document.querySelector("#telefono").value;
    const direccion = document.querySelector("#direccion").value;
    const cargo = document.querySelector("#cargo").value;

    const empleado = {
        nombre,
        documento,
        foto,
        correo,
        telefono,
        direccion,
        cargo
    }
    //console.log(empleado);
    const confirmar = confirm("¿ Agregar el Registro ?");
    if (confirmar) {
        await addNewEmpleado(empleado);
    }
}


// ELIMINAR UNA PRUEBAS
const tabla = document.querySelector("#content");

tabla.addEventListener('click', confirmDelete);

async function confirmDelete(e) {
    //console.log(e.target.classList.contains("eliminar"));
    if (e.target.classList.contains("eliminar")) {
      const id = e.target.dataset.empleado;
      console.log(id);
      const confirma = confirm("¿Desea eliminar este Registro?");
      if (confirma) {
          await deleteEmpleado(id);
      }    
    } 
};

// mostrar detalles de acusado
const tablaD =  document.querySelector("#content");
tablaD.addEventListener('click', lookDetail);

async function lookDetail(e) {
    console.log(e.target.classList.contains("detalle"));
    const idEmpleado = { 
        id : e.target.getAttribute("idEmpleado")
    }
    const empleado = await getEmpleado(idEmpleado.id);
    //console.log("empleado",empleado);
    let html = '';
    const modalData = document.querySelector("#modaldetail");

    html =`
    <div class="card mb-3" style="max-width: 100%;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="img/empleado/${empleado.foto}" alt="..." style="width: 240px">
      </div>
      <div class="col-md-8">
        <div class="card-body cardD">
          <h2 class="card-title">${empleado.nombre}</h2>
          <p class="card-text"><strong>Cedula</strong>: ${empleado.documento}</p>
          <p class="card-text"><strong>Correo</strong>: ${empleado.correo}</p>
          <p class="card-text"><strong>Telefono</strong>: ${empleado.telefono}</p>
          <p class="card-text"><strong>Direccion</strong>: ${empleado.direccion}</p>
          <p class="card-text"><strong>Cargo</strong>: ${empleado.cargo}</p>
        </div>
      </div>
    </div>
  </div>
    `;
    modalData.innerHTML = html;
};