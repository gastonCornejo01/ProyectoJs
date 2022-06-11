class Ingresos {
  constructor(id, fecha, nombre, monto) {
    this.id = id;
    this.fecha = fecha;
    this.nombre = nombre;
    this.monto = monto;
  }
}

let ingresos = JSON.parse(localStorage.getItem("ingresos")) || [];
let tableBody = document.querySelector("#table_body");

//ingresos.push(ingreso1, ingreso2, ingreso3);
//localStorage.setItem("ingresos", JSON.stringify(ingresos));

function agregarIngresos(e) {
  e.preventDefault();

  let id = new Date().getTime();
  let fecha = document.getElementById("text_fecha").value;
  let nombre = document.getElementById("text_nombre").value;
  let monto = document.getElementById("text_monto").value;

  ingresos.push(new Ingresos(id, fecha, nombre, monto));
  localStorage.setItem("ingresos", JSON.stringify(ingresos));
  document.getElementById("formulario_ingreso").reset();
  document.getElementById("text_nombre").focus();
  cargarTabla();
}
class Egresos {
  constructor(id1, fecha1, nombre1, monto1) {
    this.id1 = id1;
    this.fecha1 = fecha1;
    this.nombre1 = nombre1;
    this.monto1 = monto1;
  }
}

let egresos = JSON.parse(localStorage.getItem("egresos")) || [];
let tableBody1 = document.querySelector("#table_body1");

//Egresos.push(egreso1, egreso2, egreso3);
//localStorage.setItem("Egresos", JSON.stringify(Egresos));

function agregarEgresos(e) {
  e.preventDefault();

  let id1 = new Date().getTime();
  let fecha1 = document.getElementById("text_fecha1").value;
  let nombre1 = document.getElementById("text_nombre1").value;
  let monto1 = document.getElementById("text_monto1").value;

  egresos.push(new Egresos(id1, fecha1, nombre1, monto1));
  localStorage.setItem("egresos", JSON.stringify(egresos));
  document.getElementById("formulario_egreso").reset();
  document.getElementById("text_nombre1").focus();
  cargarTabla1();
}

const cargarTabla = () => {
  tableBody.innerHTML = "";
  ingresos.map(function (ingreso, index) {
    let tr = document.createElement("tr");
    tr.classList = "table-success";
    let celda = `<th scope="row">${ingreso.fecha}</th>
        <td>${ingreso.nombre}</td>
        <td class="d-flex justify-content-between align-items-center">${ingreso.monto}
          <div>
            <button class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
            <button class="btn btn-dark btn-sm"><i class="fas fa-trash-alt"></i></button>
          </div>
        </td>`;

    tr.innerHTML = celda;
    tableBody.appendChild(tr);
  });
};
const cargarTabla1 = () => {
  tableBody.innerHTML = "";
  egresos.map(function (egreso, index) {
    let tr1 = document.createElement("tr");
    tr1.classList = "table-danger";
    let celda = `<th scope="row">${egreso.fecha1}</th>
        <td>${egreso.nombre1}</td>
        <td class="d-flex justify-content-between align-items-center">${egreso.monto1}
          <div>
            <button class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
            <button class="btn btn-dark btn-sm"><i class="fas fa-trash-alt"></i></button>
          </div>
        </td>`;

    tr1.innerHTML = celda;
    tableBody1.appendChild(tr1);
    cargarTabla();
  });
};

document
  .getElementById("formulario_ingreso")
  .addEventListener("submit", agregarIngresos);
document
  .getElementById("formulario_egreso")
  .addEventListener("submit", agregarEgresos);

cargarTabla();
cargarTabla1();
