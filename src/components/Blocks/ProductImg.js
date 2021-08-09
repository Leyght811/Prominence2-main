import React, { useState } from "react";
import "../../assets/styles/Style.css";
import "../../assets/styles/Products.css";

const ProductImg = (props) => {
  return (
    <div className="productImg Header Maroon" id={props.id}>
      <div className="opaque productTxt">{props.txt}</div>
    </div>
  );
}

export default ProductImg
