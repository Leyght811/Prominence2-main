import React, { useState } from "react";
import ProductImg from "../Blocks/ProductImg";
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
          <ProductImg id="productTimberVenetian" txt="Timber venetian blind" />
        </div>
        <div className="col centered">
          <ProductImg
            id="productClassicSheer"
            txt="Classic style sheers, curtains and blinds"
          />
        </div>
        <div className="col centered">
          <ProductImg id="productPelmetValance" txt="Pelmets and valances" />
        </div>
        <div className="col centered">
          <ProductImg
            id="productSunscreenRoller"
            txt="Sunscreen roller blinds"
          />
        </div>
      </div>
      <div className="row">
        <div className="col centered">
          <ProductImg id="productRoller" txt="Roller blinds" />
        </div>
        <div className="col centered">
          <ProductImg id="productRoman" txt="Roman blinds" />
        </div>
        <div className="col centered">
          <ProductImg
            id="productAluminiumVenetian"
            txt="Aluminium venetian blinds"
          />
        </div>
        <div className="col centered">
          <ProductImg id="productVertical" txt="Vertical blinds" />
        </div>
      </div>
    </div>
  );
};

export default Products;
