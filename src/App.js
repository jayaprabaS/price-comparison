import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-balance-scale"></i> Compare{" "}
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#products">Categories</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/omar-al-ghosson-qSnlkqPCj-4-unsplash.jpg"
                alt="Los Angeles"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3>Mobiles</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/andras-vas-Bd7gNnWJBkU-unsplash.jpg"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3>Laptops</h3>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/photography-g07321c6ba_640.jpg"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3>Cameras</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="step-container">
          <h1 className="heading">
            how it <span>works</span>
          </h1>
          <section className="steps">
            <div className="box">
              <img src="images/download%20(1).jpg" alt="" />
              <h5>Choose a product</h5>
            </div>
            <div className="box">
              <img src="images/download.png" alt="" />
              <h5>Compare price in two ecommerce sites</h5>
            </div>
            <div className="box">
              <img src="images/mini%20project/images/download.jpg" alt="" />
              <h5>And finally, grab the best deal</h5>
            </div>
          </section>
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          popular <span>brands</span>{" "}
        </h1>

        <div className="filter-box">
          <a href="" className="buttons active" data-filter="All">
            All
          </a>
          <a href="#mobiles.html" className="buttons" data-filter="Mobiles">
            Mobiles
          </a>
          <a href="#laptops.html" className="buttons" data-filter="Laptops">
            Laptops
          </a>
          <a
            href="#televisions.html"
            className="buttons"
            data-filter="Televisions"
          >
            Televisions
          </a>
          <a
            href="#washing machines.html"
            className="buttons"
            data-filter="Washing machines"
          >
            Washing machines
          </a>
          <a
            href="#refrigirators.html"
            className="buttons"
            data-filter="Refrigirators"
          >
            Refrigirators
          </a>
          <a href="#cameras.html" className="buttons" data-filter="Cameras">
            Cameras
          </a>
        </div>
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <Link to="products" className="iPhone">
                iphone
              </Link>
            </div>
            <div className="image">
              <img src="images/photo-1556656793-08538906a9f8.jpg" alt="" />
            </div>
          </div>

          <div className="box" data-item="seller">
            <div className="icons">
              <a href="Oneplus.html" className="LG">
                onePlus
              </a>
            </div>
            <div className="image">
              <img src="images/erebus-xgImLxtmRM4-unsplash.jpg" alt="" />
            </div>
          </div>

          <div className="box" data-item="arrivals">
            <div className="icons">
              <a href="lg.html" className="LG">
                LG
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.18.16%20PM.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="featured">
            <div className="icons">
              <a href="sony.html" className="Sony">
                Sony
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.16.54%20PM%20-%20Copy.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="arrivals">
            <div className="icons">
              <a href="godrej.html" className="Godrej">
                Godrej
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.35.53%20PM.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="special">
            <div className="icons">
              <a href="bosch.html" className="Bosch">
                Bosch
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.29.25%20PM.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="seller">
            <div className="icons">
              <a href="app.html" className="Canon">
                Canon
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.40.35%20PM.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="seller">
            <div className="icons">
              <a href="nikon.html" className="Nikon">
                Nikon
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.40.35%20PM%20(1).jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="featured">
            <div className="icons">
              <a href="mac.html" className="Mac">
                Mac
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.06.54%20PM.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="box" data-item="featured">
            <div className="icons">
              <a href="Whirlpool.html" className="Wirlpool">
                Wirlpool
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.25.02%20PM.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="special">
            <div className="icons">
              <a href="app.html" className="IFB">
                IFB
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.22.43%20PM.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="box" data-item="seller">
            <div className="icons">
              <a href="lenovo.html" className="Lenovo">
                Lenovo
              </a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-12%20at%209.05.17%20AM%20(1).jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          new <span>arrivals</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="icons">
              <a href="iPhone 13.html" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img src="images/iphone-13-pro-blue-select.png" alt="" />
            </div>
            <div className="content">
              <h4>iPhone 13 pro</h4>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <a href="" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/71B9eOSKaIS._SL1500_.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h4>Sony Bravia 189 cm </h4>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img
                src="images/mini%20project/images/WhatsApp%20Image%202021-10-10%20at%2011.07.57%20PM.jpeg"
                alt=""
              />
            </div>
            <div className="content">
              <h4>Apple MacBook Pro</h4>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
