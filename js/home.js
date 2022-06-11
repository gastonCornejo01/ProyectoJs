let usuario = JSON.parse(localStorage.getItem("user")) || null;
let contenedorLista = document.getElementById("menu_lista");

//contenedor de las tarjetas
let contenedorTarjetas = document.getElementById("tarjetas_container");

//Traer los datos de los cursos desde localstorage
let cursos = JSON.parse(localStorage.getItem("cursos")) || [];



//Cargar los cursos en tarjetas
function cargarTarjetas() {
  //limpiar el contenedor
  contenedorTarjetas.innerHTML = "";

  if (cursos.length > 0) {
    //recorrer el arreglo de cursos y crear cada tarjeta
    cursos.map(function (curso) {
      let div = document.createElement("div");
      div.classList = "col-12 col-md-4 mb-3";

      let tarjeta = `<div class="card h-100">
      <img src="${curso.imagen}" class="card-img-top img_tarjeta" alt="${curso.titulo}">
      <div class="card-body">
        <h5 class="card-title">${curso.titulo}</h5>
        <p class="card-text">${curso.descripcion}</p>
       
      </div>
        <div class="card-footer">
        <a href="#" class="btn btn-primary float-end">Comprar</a>
        </div>
      </div>`;

      div.innerHTML = tarjeta;
      contenedorTarjetas.appendChild(div);
    });
  } else {
    let div = document.createElement("div");
    let alerta = ` <div class="alert alert-warning" role="alert">
    No hay cursos habilitados
  </div>`;
    div.innerHTML = alerta;
    contenedorTarjetas.appendChild(div);
  }
}
//-----------------------------------------------

cargarTarjetas();
