import React, { useState } from "react";
import "../../assets/styles/Style.css";
import "../../assets/styles/Products.css";

const Products = () => {
  return (
    <div id="productsHead" className="container-fluid pageMain">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 centered Header Header2 Maroon textBlock">
          Our Products
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row ">
        <div className="col-1"></div>
        <div className="col-10 centered textBlock">Style thats affordable</div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col centered">
          <div className="productImg Header Maroon" id="productTimberVenetian">
            <div className="opaque productTxt">Timber venetian blinds</div>
          </div>
        </div>
        <div className="col centered">
          <div className="productImg Header Maroon" id="productClassicSheer">
            <div className="opaque productTxt">Classic style sheers, curtains and blinds</div>
          </div>
        </div>
        <div className="col centered">
          <div className="productImg Header Maroon" id="productPelmetValance">
            <div className="opaque productTxt">Pelmets and valances</div>
          </div>
        </div>
        <div className="col centered">
          <div className="productImg Header Maroon" id="productSunscreenRoller">
            <div className="opaque productTxt">Sunscreen roller blinds</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col centered">
          <div className="productImg Header Maroon" id="productRoller">
            <div className="opaque productTxt">Roller blinds</div>
          </div>
        </div>
        <div className="col centered">
          <div className="productImg Header Maroon" id="productRoman">
            <div className="opaque productTxt">Roman blinds</div>
          </div>
        </div>
        <div className="col centered">
          <div
            className="productImg Header Maroon"
            id="productAluminiumVenetian"
          >
            <div className="opaque productTxt">Aluminium venetian blinds</div>
          </div>
        </div>
        <div className="col centered">
          <div className="productImg Header Maroon" id="productVertical">
            <div className="opaque productTxt">Vertical blinds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
