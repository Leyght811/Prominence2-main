import React, { useState } from "react";
import "../../assets/styles/Style.css";
import "../../assets/styles/Contact.css";

const Contact = () => {
  return (
    <div className="pageMain container-fluid">
      <div className="row">
        <div id="contactOpeningHours" className="col-sm centered opaque">
          <div className="Header Header2 Maroon contactHead">Opening hours</div>{" "}
          Mon - Fri: 9am - 5pm <br /> Sat: 10am - 1pm <br /> Sun: Closed
        </div>
      </div>
      <div className="row">
        <div className="col-sm centered textBlock">
          <div id="contactDetails">
            <div className="Header Header2 Maroon contactHead">Contact us</div>
            prominence@gmail.co.nz
            <br />
            3 633 2347 or 21 769 279
          </div>
        </div>
        <div id="contactImg" className="col-sm"></div>
      </div>
    </div>
  );
};

export default Contact;
