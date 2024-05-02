import React, { useState } from "react";
import { FaEye, FaFacebookSquare } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Home.css";
import Home_products from "./Home_products";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Home_products);
  // filter of tending product

  const filtercate = (x) => {
    const filterproduct = Home_products.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterproduct);
  };
  // all trending product
  const allTrendingProduct = () => {
    setTrendingProduct(Home_products);
  };
  return (
    <div className="home">
      <div className="top_banner">
        <div className="contant">
          <h3>silver aluminium</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first order</p>
          <Link to="/shop" className="link">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="trending">
        <div className="container">
          <div className="left_box">
            <div className="header">
              <div className="heading">
                <h2 onClick={() => allTrendingProduct()}>trending product</h2>
              </div>
              <div className="cate">
                <h3 onClick={() => filtercate("new")}>New</h3>
                <h3 onClick={() => filtercate("featured")}>Featured</h3>
                <h3 onClick={() => filtercate("top selling")}>Top Selling</h3>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {trendingProduct.map((curElm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={curElm.image} alt="" />
                          <div className="icon">
                            <div className="icon_box">
                              <FaEye />
                            </div>
                            <div className="icon_box">
                              <IoMdHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <button className="btn">Add to cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="right_container">
              <div className="testimonial">
                <div className="head">
                  <h3>our testimonial</h3>
                </div>
                <div className="detail">
                  <div className="img_box">
                    <img src="T1.avif" alt="testimonial" />
                  </div>
                  <div className="info">
                    <h3>Stephen Curry</h3>
                    <h4>web Designer</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis quae repellat dolores vero perspiciatis quos!
                    </p>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <div className="head">
                  <h3>newsletter</h3>
                </div>
                <div className="form">
                  <p>Let's Connect</p>
                  <input
                    type="email"
                    placeholder="E-mail"
                    autoComplete="off"
                    name=""
                    id=""
                  />
                  <button>Subscribe</button>
                  <div className="icon_box">
                    <div className="icon">
                      <FaFacebookSquare />
                    </div>
                    <div className="icon">
                      <FaSquareXTwitter />
                    </div>
                    <div className="icon">
                      <FaInstagramSquare />
                    </div>
                    <div className="icon">
                      <IoLogoYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
