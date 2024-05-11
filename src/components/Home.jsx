import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Icon } from "react-router-dom";

import "./Home.css";

import mainImage from "./images/MainImage.png";

// import Hero from "./ui/Hero";
// import Navbar from "./ui/Navbar";

function Home() {
  return (
    // <>
    //   <Navbar />
    //   <Hero />
    //   <h1>Hero</h1>
    // </>

    <div className="container-fluid">
      {/* Navbar start */}
      <nav className="navbar navbar-expand-md navbar-dark bg-none">
        <div className="container">
          <Link className="navbar-brand me-lg-5" href="/">
            RunningSpeed
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-lg-between ps-lg-5 ms-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ps-lg-5 ps-0 ms-lg-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  CONTACTS
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item cta-btn">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 text-white"
                    type="search"
                    placeholder="Search field"
                    aria-label="Search"
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar end */}

      {/* Hero start */}
      <div className="hero d-flex flex-column flex-md-row justify-content-around align-items-center">
        <div className="hero-title d-flex flex-column align-items-start text-white">
          <p className="title-slogan">
            Run Your World: Nike, Every Step a Victory.
          </p>
          <h1 className="hero-header">
            ALWAYS
            <br />
            FASTER
          </h1>
        </div>
        <img className="main-img" src={mainImage} alt="Nike Airmax Pro" />
        <div className="cta d-flex flex-column text-white">
          <h4 className="cta-text">NIKE FAST RUNNER</h4>
          <h4 className="cta-text">SNEAKES</h4>
          <h4 className="cta-text">$124.00</h4>
          <button className="cta-btn-order">ORDER NOW</button>
        </div>
      </div>
      {/* Hero end */}

      {/* Grid start */}
      <h1 className="d-flex grid-title justify-content-center">GRID LIST</h1>

      <div className="d-flex flex-row justify-content-center">
        {/* Card 1*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/GreenShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <div className="card-icons">
                  <small class="text-body-white">
                    <Icon></Icon>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 1*/}

        {/* Card 2*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/BlackShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <div className="card-icons">
                  <small class="text-body-white">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2*/}

        {/* Card 3*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/WhiteShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <div className="card-icons">
                  <small class="text-body-white">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3*/}

        {/* Card 4*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/RedShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <p className="card-text">
                  <small class="text-body-white">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4*/}
      </div>

      <div className="d-flex flex-row">
        {/* Card 1*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/GreenShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <div className="card-icons">
                  <small class="text-body-white">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 1*/}

        {/* Card 2*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/BlackShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <div className="card-icons">
                  <small class="text-body-white">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2*/}

        {/* Card 3*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/WhiteShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <div className="card-icons">
                  <small class="text-body-white">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3*/}

        {/* Card 4*/}
        <div className="card mb-3">
          <div className="d-flex flex-row g-0">
            <div className="d-flex flex-column card-img-container">
              <img
                src="./images/RedShoe.png"
                className="card-img img-fluid rounded-start"
                alt="Green Nike Air"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column card-body align-items-end">
                <h5 className="card-title text-end">
                  AIR JORDANS
                  <br />
                  SNEAKERS
                </h5>
                <p className="card-text">$144.99</p>
                <div className="card-icons">
                  <small class="text-body-white">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4*/}
      </div>
      {/* Grid end */}

      {/* Footer start */}
      <div className="d-flex footer flex-column flex-md-row justify-content-around">
        <div className="d-flex flex-row flex-md-column">
          <h1 className="subscribe">SUBSCRIBE</h1>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item cta-btn">
              <form className="footer-form d-flex" role="search">
                <input
                  className="form-control-footer me-2 text-dark"
                  type="email"
                  placeholder="Enter your email here*"
                  aria-label="Search"
                />
              </form>
            </li>
          </ul>
          <button className="cta-btn-footer">ORDER NOW</button>
          <p>Subscribe for monthly updates.</p>
        </div>
        <div className="d-flex flex-row flex-md-column">
          <h3 className="footer-title">RunningSpeed</h3>
          <Link className="footer-link" href="#">
            Phone: +389 70 123 456
          </Link>
          <Link className="footer-link" href="#">
            Email: turbologo@contact.com
          </Link>
          <Link className="footer-link" href="#">
            Address: Ulica Makedonija 5, 1000 Skopje,
            <br />
            North Macedonia
          </Link>
        </div>
        <div className="d-flex flex-row flex-md-column">
          <h3 className="footer-title">LINKS</h3>
          <Link className="footer-link" href="#">
            Home
          </Link>
          <Link className="footer-link" href="#">
            Products
          </Link>
          <Link className="footer-link" href="#">
            About
          </Link>
          <Link className="footer-link" href="#">
            Contact
          </Link>
        </div>
      </div>
      {/* Footer end */}
    </div>
  );
}

export default Home;
