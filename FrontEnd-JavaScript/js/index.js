import{
  obtenerCategorias,
  addNewCategory,
  deleteCategoria,
}from "../APIs/APIcategoria.js";


document.addEventListener("DOMContentLoaded", () => {
    getCategorias();
});


async function getCategorias() {
  try {
    const listaCategorias  = await obtenerCategorias();
    //console.log(listaCategorias);
    const listado = document.querySelector("#categorias");
    let html = ''
    listaCategorias.forEach( element => {
      const {_id,nombre,imagen, descripcion} = element;
      
      html +=`
      <div class="card" id="cardd" style="w">
      <img src="img/${imagen}" class="card-img-top" alt="..." />
      <div class="card-body">
              <h2 class="card-title">${nombre}</h2>
              <p class="card-text">
                  ${descripcion}
              </p>              
              <button  class="btn btn-lg btn-danger eliminar" data-category="${_id}" >borrar</button>
      </div>
    </div>
      `;
    listado.innerHTML = html;
    });
  } catch (error) {
    console.log(error);
  };
};




const add = document.querySelector("#formulario");
add.addEventListener('submit',agregarCategoria);

async function agregarCategoria(e){
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const imagen = document.querySelector("#img").value;
  const descripcion = document.querySelector("#descripcion").value;

  const categoria = {
    nombre,
    imagen,
    descripcion
  }
  //console.log(categoria);
  const confirma = confirm("¿ Desea agregar este  Registro ?")
  if (confirma) {
    await addNewCategory(categoria);
  }
}; 



// ELIMINAR UNA PRUEBAS
const tabla = document.querySelector("#categorias");

tabla.addEventListener('click', confirmDelete);

async function confirmDelete(e) {
    //console.log(e.target.classList.contains("eliminar"));
    if (e.target.classList.contains("eliminar")) {
      const id = e.target.dataset.category;
      //console.log(id);
      const confirma = confirm("¿Desea eliminar este Registro?");
      if (confirma) {
          await deleteCategoria(id);
      }    
    }
};