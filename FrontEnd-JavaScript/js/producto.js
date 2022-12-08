import {

    getProductos,
    addNewProduct,
    deleteProduct,
    getCategorias

}from "../APIs/APIproducto.js";



document.addEventListener('DOMContentLoaded',()=>{

    getAllProduct();
    getCategory();

})



// get all categories
async function getCategory() {
    const categorias = await getCategorias();
    const select = document.querySelector("#categoria"); 
    let html = '';
    categorias.forEach(element => {
        const{ _id , nombre } = element;
        html +=`
        <option idC="${_id}" value="${nombre}">${nombre}</option>
        `;
        select.innerHTML = html;
    });
};


// get all products
async function getAllProduct() {
    const productos =  await getProductos();
    const contenedor  = document.querySelector("#productos");
    let html = '';
    productos.forEach(element => {
        const {_id, nombre, imagen, categoria, descripcion, precio} = element;
        html += `
        <div class="card" id="cardd" style="w">
            <h2 class="card-title">${nombre}</h2>
            <img src="img/productos/${imagen}" class="card-img-top" alt="..." />
                <div class="card-body">
                        
                        <p class="card-text">
                            ${descripcion}
                        </p>
                        <p class="card-text">
                            Precio: $${precio}
                        </p>               
                        <button  class="btn btn-lg btn-danger eliminar" data-product="${_id}" >borrar</button>
                </div>
        </div>  
        `;
        contenedor.innerHTML = html;
    });
};




// add new product
const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', confirmAddNewProduct);

async function confirmAddNewProduct(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const imagen = document.querySelector("#img").value;
    const categoria = document.querySelector("#categoria").value;
    const descripcion = document.querySelector("#descripcion").value;
    const precio = document.querySelector("#precio").value;
    //console.log(nombre,img,categoria, descripcion, precio);
    const producto ={
        nombre,
        imagen,
        categoria,
        descripcion,
        precio
    }
    //console.log(producto);
    const confirma = confirm("¿ Desea agregar este Producto ?")
    if (confirma) {
        await addNewProduct(producto);
    };
}


// delete one product by id

// ELIMINAR UNA PRUEBAS
const data = document.querySelector("#productos");
data.addEventListener('click', confirmDelete);
async function confirmDelete(e) {
    //console.log(e.target.classList.contains("eliminar"));
    if (e.target.classList.contains("eliminar")) {
      const id = e.target.dataset.product;
      console.log(id);
      const confirma = confirm("¿Desea eliminar este Registro?");
      if (confirma) {
          await deleteProduct(id);
      }    
    } 
};