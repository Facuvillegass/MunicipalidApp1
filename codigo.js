// let loginForm = document.getElementById("login-form");
let bienvenidaLogin = document.getElementById("bienvenidaLogin");
let btnContactanos = document.getElementById("btnContactanos");
// let btnRealizaTusPagos = document.getElementById("btnRealizaTusPagos");
let btnCargaReclamos = document.getElementById("btnCargaReclamos");
let btnPortalGestion = document.getElementById("btnPortalGestion");
let ventanaContactanos = document.getElementById("ventanaContactanos");
let ventanaRealizaTusPagos = document.getElementById("ventanaRealizaTusPagos");
let ventanaCargaReclamos = document.getElementById("ventanaCargaReclamos");
let btnInicio = document.getElementById("btnInicio");
let ventanaPortalGestion = document.getElementById("ventanaPortalGestion");
let ventanaPagosRealizados = document.getElementById("pagosRealizados");

btnInicio.addEventListener("click", () => {
  location.reload();
});

let bntObtenerMiUbicación = document.getElementById("bntObtenerMiUbicación");

const success = (e) => {
  console.log(
    "gracias sus coordenadas son: ",
    e.coords.latitude,
    e.coords.longitude
  );
};
bntObtenerMiUbicación.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success);
});

window.addEventListener("load", () => {
  let login = localStorage.getItem("login");
  if (login != null) {
    console.log("hay usuario, estas adentro");
    loginForm.classList.add("hidden");
    bienvenidaLogin.classList.remove("hidden");
  }
});

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let emailUsuario = e.target.email.value;
//   let passUsuario = e.target.password.value;

//   if (emailUsuario == "facundovillegas746@gmail.com" && passUsuario == 1234) {
//     localStorage.clear();
//     localStorage.setItem("login", "login");
//     bienvenidaLogin.classList.remove("hidden");
//     loginForm.classList.add("hidden");
//   }
// });



btnRealizaTusPagos.addEventListener("click", () => {
  btnRealizaTusPagos.classList.add("hidden");
  btnCargaReclamos.classList.add("hidden");
  btnPortalGestion.classList.add("hidden");
  btnContactanos.classList.add("hidden");
  let div = document.createElement("div");
  div.innerHTML = `

        <button class="btn btn-primary mt-4 mb-3 px-5" id="btnPagarRentas">
        <a href="https://getbootstrap.com/docs/5.0/components/carousel/" style="text-decoration: none; color: white;">Pagar Rentas</a>
        </button>

      <br />

      
        <button class="btn btn-primary mt-4 mb-3 px-5" id="btnPagarServicios">
        <a href="https://getbootstrap.com/docs/5.0/components/carousel/" style="text-decoration: none; color: white;">Pagar servicios básicos</a>
        </button>


        <br/>


        <br/>

      <button
        type="button"
        class="btn btn-primary mb-3 px-5"
        id= "btnPagosRealizados"
        
      >
        Ver registro de pagos realizados
      </button>
        `;

  ventanaRealizaTusPagos.appendChild(div);

  let btnPagosRealizados = document.getElementById("btnPagosRealizados");
  btnPagosRealizados.addEventListener("click", () => {
    let div = document.createElement("div");
    div.innerHTML = `<div
        style="
          width: 85%;
          margin-right: auto;
          margin-left: auto;
          border: solid 3px blue;
        "
      >
      <h2 style="text-align: center;">Mis pagos realizados</h2>
        <table class="table" style="text-align: center ;">
          <thead>
            <tr>
              <th scope="col">Fecha del pago</th>
              <th scope="col">Receptor</th>
              <th scope="col">Dinero pagado</th>
              <th scope="col">Comprobante</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">15/09/22</th>
              <td>Rentas Córdoba</td>
              <td>$5.690</td>
              <td><button class="btn btn-primary px-2">Descargar</button></td>
            </tr>
            <tr>
              <th scope="row">19/06/23</th>
              <td>Ecogas</td>
              <td>$4.100</td>
              <td><button class="btn btn-primary px-2">Descargar</button></td>
            </tr>
            <tr>
              <th scope="row">21/11/23</th>
              <td>EPEC</td>
              <td>$4.900</td>
              <td><button class="btn btn-primary px-2">Descargar</button></td>
            </tr>
          </tbody>
        </table>
      </div>`;
    let btnPagarRentas = document.getElementById("btnPagarRentas");
    btnPagarRentas.classList.add("hidden");
    let btnPagarServicios = document.getElementById("btnPagarServicios");
    btnPagarServicios.classList.add("hidden");
    ventanaPagosRealizados.appendChild(div);
    btnPagosRealizados.classList.add("hidden");
  });
});

btnCargaReclamos.addEventListener("click", () => {
  btnRealizaTusPagos.classList.add("hidden");
  btnCargaReclamos.classList.add("hidden");
  btnPortalGestion.classList.add("hidden");
  btnContactanos.classList.add("hidden");

  let div = document.createElement("div");
  div.innerHTML = `
        <form id="formularioReclamo">
        <h5>
          En esta sección, podrás cargar tus reclamos para que entre todos
          mejoremos la ciudad.
        </h5>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Reclamo</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingresa un título para tu reclamo"
            name="tituloReclamo"
            required
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Ingresa una descripción del reclamo"
            name="descripcionReclamo"
          ></textarea>
        </div>
        <div class="mb-3">
          <h6>Sube una imagen para que podamos verlo nosotros también!</h6>
          <input type="file" id="imgReclamo"/>
          <br/>
          <button type="button" class="btn btn-primary mb-2 mt-2">Cargar imagen</button>
        </div>
        <div>
          <h6>Ahora, si estás en el lugar, danos su ubicación!</h6>
          <button type="button" class="btn btn-primary mb-3">
            ¡Estoy en el lugar!
          </button>
          <h6>
            Y si no, pero te acuerdas la zona, te pedimos que ingreses una
            ubicación en nuestro mapa!
          </h6>
          <button type="button" class="btn btn-primary mb-2">Ver mapa</button>
          <br/>
          <button type="submit" class="btn btn-primary mb-2 mt-2">
            Enviar Reclamo
          </button>
        </div>
      </form>
        `;

  ventanaCargaReclamos.appendChild(div);

  let formularioReclamo = document.getElementById("formularioReclamo");
  formularioReclamo.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

btnPortalGestion.addEventListener("click", () => {
  btnRealizaTusPagos.classList.add("hidden");
  btnCargaReclamos.classList.add("hidden");
  btnPortalGestion.classList.add("hidden");
  btnContactanos.classList.add("hidden");
  let div = document.createElement("div");
  div.innerHTML = `
        <div>
        <h4 style="text-align: center">
          ¡Queremos compartir con vos los logros que hemos conseguido todos
          juntos!
        </h4>
        <div style="width: 85%; margin-left: auto; margin-right: auto">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./images/arbol.png" class="d-block" width="400" />
                <h6 style="text-align: center">Proyecto de gestión 1</h6>
                <p>
                  Entre todos, realizamos la reforestación del parque local.
                </p>
              </div>
              <div class="carousel-item">
                <img src="./images/multitud.png" class="d-block" width="400" />
                <h6 style="text-align: center">Proyecto de gestión 2</h6>
                <p>
                  Entre todos, llevamos adelante una nueva conferencia para cuidar nuestro ambiente. 
                </p>
              </div>
              <div class="carousel-item">
                <img src="./images/puente.png" class="d-block" width="400" />
                <h6 style="text-align: center">Proyecto de gestión 3</h6>
                <p>
                  Entre todos, inauguramos un nuevo puente para darle accesibilidad a nuestros ciudadanos.
                </p>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
        `;

  ventanaPortalGestion.appendChild(div);
});
