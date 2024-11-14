import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <>

  <div className="social-icons col-4 "style={{backgroundColor: "#faf9f6"}}>
  <a><i class="fa-brands fa-facebook"></i></a>
  <a><i class="fa-brands fa-instagram"></i></a>
  <a><i class="fa-brands fa-youtube"></i></a>
  <a><i class="fa-brands fa-linkedin"></i></a>
  <a><i class="fa-brands fa-x-twitter"></i></a>

  </div>

    
    <nav
      class="navbar navbar-expand-lg border-bottom "
      style={{ backgroundColor: "#e73725" }}
    >
      <div class="container ">
        <a class="navbar-brand" href="#" >
          <img src="images/image.png" style={{ width: "15%" }}  />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse sagar-nav" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li class="nav-item ">
              <Link class="nav-link active text-white" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-white" to="/services">
                SERVICES
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-white" to="/tournaments">
                TOURNAMENTS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-white" to="/news">
                NEWS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-white" to="/register">
                REGISTER
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-white" to="/about">
                ABOUT
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-white" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}


export default Navbar;
