let token = localStorage.getItem("token");
let btnInicio = document.getElementById("btnInicio");

window.addEventListener("load", () => {
  if (token != undefined) {
    btnInicio.addEventListener("click", () => {
      window.location.href = "./usuarioLogueado.html";
    });
  } else {
    window.location.href = "./index.html";
    btnInicio.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }
});