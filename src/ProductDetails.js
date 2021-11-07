import React from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

function ProductDetails() {
  const [productId, setProductId] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    setProductId(Number(id));
  }, [id]);
  return (
    <div className="main-container">
      {productId === 1 && (
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
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Apple iPhone 13 Mini"
                    className="price-link"
                  >
                    Price
                  </Link>
                </li>
                <li>
                  <Link to="#" className="price-link">
                    Ratings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                <h5>Key Specification & Features</h5>
                <li>Screen Size 5.4 inches (13.72 cm)</li>
                <li>Front Camera 12 MP</li>
                <li>Rear Camera 12 MP + 12 MP</li>
                <li>Battery 2227 mAh</li>
                <li>RAM 4 GB</li>
                <li>
                  Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                  Quad core, Icestorm)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {productId === 2 && (
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
              <h1 className="font-weight-bold py-3">Apple iPhone 12 pro</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Apple iPhone 12 pro"
                    className="price-link"
                  >
                    Price
                  </Link>
                </li>
                <li>
                  <Link to="#" className="price-link">
                    Ratings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                <h5>Key Specification & Features</h5>
                <li>Screen Size 6.1 inches (15.49 cm)</li>
                <li>Front Camera 12 MP</li>
                <li>Rear Camera 12 MP + 12 MP</li>
                <li>Battery 2815 mAh</li>
                <li>RAM 4 GB</li>
                <li>
                  Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                  Quad core, Icestorm)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {productId === 3 && (
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
              <ul className="cost">
                <li>
                  <Link to="/search?q=Apple iPhone XR" className="price-link">
                    Price
                  </Link>
                </li>
                <li>
                  <Link to="#" className="price-link">
                    Ratings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                <h5>Key Specification & Features</h5>
                <li>Screen Size 6.1 inches (15.5 cm)</li>
                <li>Front Camera 7 MP</li>
                <li>Rear Camera 12 MP + 12 MP</li>
                <li>Battery 2815 mAh</li>
                <li>RAM 4 GB</li>
                <li>
                  Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                  Quad core, Icestorm)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {productId === 4 && (
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
              <ul className="cost">
                <li>
                  <Link to="/search?q=Apple iPhone 11" className="price-link">
                    Price
                  </Link>
                </li>
                <li>
                  <Link to="#" className="price-link">
                    Ratings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                <h5>Key Specification & Features</h5>
                <li>Screen Size 6.1 inches (15.49 cm)</li>
                <li>Front Camera 12 MP</li>
                <li>Rear Camera 12 MP + 12 MP</li>
                <li>Battery mAh</li>
                <li>RAM 4 GB</li>
                <li>
                  Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                  Quad core, Icestorm)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {productId === 5 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-2 py-5 mx-5">
              <img
                src="images/Apple%20iPhone%2012%20Pro%20Max.jpg"
                className="img-fluid"
                width="300"
                height="300"
                alt=""
              />
            </div>
            <div className="col-lg-4 px-5 pt-2">
              <h1 className="font-weight-bold py-3">Apple iPhone 12 Pro Max</h1>
              <ul className="cost">
                <li>
                  <Link
                    to="/search?q=Apple iPhone 12 Pro Max"
                    className="price-link"
                  >
                    Price
                  </Link>
                </li>
                <li>
                  <Link to="#" className="price-link">
                    Ratings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-lg-4 py-5 pt-10 ml-6">
              <ul>
                <h5>Key Specification & Features</h5>
                <li>Screen Size 6.7 inches (17.02 cm)</li>
                <li>Front Camera 12 MP</li>
                <li>Rear Camera 12 MP + 12 MP + 12 MP</li>
                <li>Battery 3687 mAh</li>
                <li>RAM 6 GB</li>
                <li>
                  Processor Hexa Core (3.1 GHz, Dual core, Firestorm + 1.8 GHz,
                  Quad core, Icestorm)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
