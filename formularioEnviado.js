import { recuperarReclamosDeFirebase } from "./fire.js";
let divFormEnviado = document.getElementById("formularioEnviado");
let reclamos = await recuperarReclamosDeFirebase();

await reclamos.map((reclamo) => {
  let miReclamo = JSON.parse(sessionStorage.getItem("miReclamo"));
  if (miReclamo == reclamo.tituloReclamo) {
    let div = document.createElement("div");
    div.innerHTML = `

    <div class="divReclamo">
    
    <h2>¡Perfecto! Ya tenemos tu reclamo</h2>

    <h4> Título de reclamo: <br> ${reclamo.tituloReclamo}</h4>
    
    <h5> Tu reclamo ya ha sido dirigido al área de: <br> ${reclamo.categoriaReclamo}</h5>
    
    <h4>¡Gracias por tu imagen para ayudarnos!</h4>
    <embed src="${reclamo.imagenReclamo}" width="250" height="350" />

    
    <h4> Trabajaremos en la siguiente ubicación: <br> latitud: ${reclamo.latitud} y longitud: ${reclamo.longitud}</h4>

    <button type="button" id="btnFinalizarReclamo"> Finalizar Reclamo </button>
    </div>


    `;

    divFormEnviado.appendChild(div);

    let btnFinalizarReclamo = document.getElementById("btnFinalizarReclamo")
    btnFinalizarReclamo.addEventListener("click", () => {
      window.location.href = "./usuarioLogueado.html";
      sessionStorage.clear()
    })
  }
});
