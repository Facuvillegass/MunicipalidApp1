let btnRealizaTusPagos = document.getElementById("btnRealizaTusPagos");

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

  ventanaPagosRealizados.appendChild(div);
});
