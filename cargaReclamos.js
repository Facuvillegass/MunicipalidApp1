import { cargarReclamoEnFirebase } from "./fire.js";

let form = document.getElementById("form");
let categoriasReclamo = document.getElementById("categoriasReclamo");
let inputFile = document.getElementById("imagenReclamo");
let btnObtenerUbicacion = document.getElementById("btnUbicacion");
let latitud;
let longitud;

let token = localStorage.getItem("token")
let btnInicio = document.getElementById("btnInicio")

if(token != undefined){
  btnInicio.addEventListener("click", () => {
    window.location.href = "./usuarioLogueado.html";
  })
} else {
    btnInicio.addEventListener("click", () => {
      window.location.href = "./index.html"
    })
  }


navigator.geolocation.getCurrentPosition((e) => {
  latitud = e.coords.latitude;
  longitud = e.coords.longitude;
});

btnObtenerUbicacion.addEventListener("click", () => {
  alert("Perfecto, usaremos tu ubicación actual para dar con tu reclamo.");
});

try {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let tituloReclamo = e.target.tituloReclamo.value;
    sessionStorage.setItem("miReclamo", JSON.stringify(tituloReclamo));
    let categoriaReclamo = categoriasReclamo.value;
    let imagenReclamo;
    const reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    reader.addEventListener("load", async (e) => {
      imagenReclamo = e.target.result;
      cargarReclamoEnFirebase(
        tituloReclamo,
        categoriaReclamo,
        imagenReclamo,
        latitud,
        longitud
      ).then(() => {
        alert("El formulario fue enviado correctamente");
        window.location.href = "./formularioEnviado.html";
      });
    });
  });
} catch (error) {
  console.log(error);
}
