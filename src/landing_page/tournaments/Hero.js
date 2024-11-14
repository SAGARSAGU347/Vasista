import React from "react";

function Hero() {
  return (
    <>
      <br />
      <br />
      <div class="container text-center mt-5">
        <h5 style={{ color: "#e73725" }}>E-SPORTS</h5>
        <h1 className="mb-4  " style={{ fontSize: "3.8em" }}>
          Tournaments
        </h1>
      </div>
      <div class="custom-line"></div>


      <br/><br/>

      <div class="container mt-5">
        <table class="table table-borderless align-middle">
          <thead>
            <tr class="table-header text-white text-uppercase">
              <th scope="col">Name</th>
              <th scope="col">Prize Pool</th>
              <th scope="col">Games</th>
              <th scope="col">Event Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Deepavali Battlemania</strong>
                <div class="text-muted">BGMI</div>
                <span class="status-label">Ongoing</span>
              </td>
              <td>-</td>
              <td>
                <img
                  src="/images/bgmilogo.png"
                  alt="BGMI"
                  style={{ width: "90px" }}
                />
              </td>
              <td>
                <span class="text-muted">Coming Soon</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Vasista Road To Victory</strong>
                <div class="text-muted">Road to Valor</div>
                <span class="status-label">Ongoing</span>
              </td>
              <td>-</td>
              <td>
                <img
                  src="/images/rtov.png"
                  alt="Road to Valor"
                  style={{ width: "90px" }}
                />
              </td>
              <td className="text-muted">Coming soon</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/><br/><br/>
    </>
  );
}

export default Hero;
