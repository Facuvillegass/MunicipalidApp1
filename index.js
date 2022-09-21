import { recuperarUsuariosRegistrados } from "./fire.js";
let loginForm = document.getElementById("login-form");
let btnRegistrar = document.getElementById("btnRegistrar");
let usuariosRegistrados = await recuperarUsuariosRegistrados();

let token = localStorage.getItem("token");
let btnInicio = document.getElementById("btnInicio");


// if (token != undefined) {
//   window.location.href = "./usuarioLogueado.html";
//   btnInicio.addEventListener("click", () => {
//     window.location.href = "./usuarioLogueado.html";
//   });
// } else {
//   window.location.href = "./index.html";
//   btnInicio.addEventListener("click", () => {
//     window.location.href = "./index.html";
//   });
// }

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailUsuario = e.target.email.value;
  let passUsuario = e.target.password.value;

  let esteEmail = usuariosRegistrados.find(
    (mail) => mail.usuario == emailUsuario
  );

  console.log(esteEmail);
  if (esteEmail != undefined) {
    if (esteEmail.usuario == emailUsuario && esteEmail.pass == passUsuario) {
      window.location.href = "./usuarioLogueado.html";
      localStorage.setItem("token", JSON.stringify(passUsuario));
    } else {
      alert("El usuario o la contraseña no es válido.");
    }
  } else {
    alert("El usuario o la contraseña no es válido.");
    return;
  }
});
