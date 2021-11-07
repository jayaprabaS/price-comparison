import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Products() {
  return (
    <div className="main-container">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple-iPhone-13-Mini-Smartphones-491997723-i-1-1200Wx1200H.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone 13 Mini</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 5.4 inches (13.72 cm)</li>
              <li>Front Camera 12 MP</li>
              <li>Rear Camera 12 MP + 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 2227 mAh</li>
              <li>RAM 4 GB</li>
              <li>
                Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                Quad core, Icestorm)
              </li>
            </ul>
            <h6>
              <Link to="/product/1" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2012.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone 12</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 6.1 inches (15.49 cm)</li>
              <li>Front Camera 12 MP</li>
              <li>Rear Camera 12 MP + 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 2815 mAh</li>
              <li>RAM 4 GB</li>
              <li>
                Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                Quad core, Icestorm)
              </li>
            </ul>
            <h6>
              <Link to="/product/2" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple-iPhone-XR-64GB-Blue-491488447-i-1-1200Wx1200H.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone XR</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 6.1 inches (15.5 cm)</li>
              <li>Front Camera 7 MP</li>
              <li>Rear Camera 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 1821 mAh</li>
              <li>RAM 3 GB</li>
              <li>
                Processor Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz,
                Quad core, Thunder)
              </li>
            </ul>
            <h6>
              <Link to="/product/3" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2011.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone 11</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 6.1 inches (15.49 cm)</li>
              <li>Front Camera 12 MP</li>
              <li>Rear Camera 12 MP + 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 3110 mAh</li>
              <li>RAM 4 GB</li>
              <li>
                Processor Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz,
                Quad core, Thunder)
              </li>
            </ul>
            <h6>
              <Link to="/product/4" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2012%20Pro%20Max.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone 12 Pro Max</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 6.7 inches (17.02 cm)</li>
              <li>Front Camera 12 MP</li>
              <li>Rear Camera 12 MP + 12 MP + 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 3687 mAh</li>
              <li>RAM 6 GB</li>
              <li>
                Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                Quad core, Icestorm)
              </li>
            </ul>
            <h6>
              <Link to="/product/5" className="view-link">
                view
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%20XR.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone XR</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 6.1 inches (15.49 cm)</li>
              <li>Front Camera 7 MP</li>
              <li>Rear Camera 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 2942 mAh</li>
              <li>RAM 3 GB</li>
              <li>
                Processor Hexa Core (2.49 GHz, Dual core, Vortex + 1.52 GHz,
                Quad core, Tempest)
              </li>
            </ul>
            <h6>
              <a href="#" className="view-link">
                view
              </a>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2011%20Pro%20Max.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone 11 Pro Max</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 6.5 inches (16.51 cm)</li>
              <li>Front Camera 12 MP</li>
              <li>Rear Camera 12 MP + 12 MP + 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 3969 mAh</li>
              <li>RAM 4 GB</li>
              <li>
                Processor Hexa Core (2.65 GHz, Dual core, Lightning + 1.8 GHz,
                Quad core, Thunder)
              </li>
            </ul>
            <h6>
              <a href="#" className="view-link">
                view
              </a>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%2012%20Pro.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone 12 Pro</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 6.1 inches (15.49 cm)</li>
              <li>Front Camera 12 MP</li>
              <li>Rear Camera 12 MP + 12 MP + 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 2815 mAh</li>
              <li>RAM 6 GB</li>
              <li>
                Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                Quad core, Icestorm)
              </li>
            </ul>
            <h6>
              <a href="#" className="view-link">
                view
              </a>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 py-5 mx-5 px-5">
            <img
              src="images/Apple%20iPhone%207%20Plus.jpg"
              className="img-fluid"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="col-lg-4 px-5 pt-2">
            <h1 className="font-weight-bold py-3">Apple iPhone 7 Plus</h1>
            <ul>
              <h5>Key Specification & Features</h5>
              <li>Screen Size 5.5 inches (13.97 cm)</li>
              <li>Front Camera 7 MP</li>
              <li>Rear Camera 12 MP + 12 MP</li>
            </ul>
          </div>
          <div className="col-lg-4 py-5 pt-10">
            <ul>
              <li>Battery 2900 mAh</li>
              <li>RAM 3 GB</li>
              <li>
                Processor Quad core (2.34 GHz, Dual core, Hurricane + 1.1 GHz,
                Dual core, Zephyr)
              </li>
            </ul>
            <h6>
              <a href="#" className="view-link">
                view
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
