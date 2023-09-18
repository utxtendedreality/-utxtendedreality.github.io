import React, { useState } from "react";
import clublogo from "../utxr-logo-dark.png"
import uoftlogo from "../uoft-logo.png"
import "./Footer.css";
import '../fonts.css';

const landAcknowledgement= "We wish to acknowledge this land on which the University of Toronto operates. For thousands of years it has been the traditional land of the Huron-Wendat, the Seneca, and the Mississaugas of the Credit. Today, this meeting place is still the home to many Indigenous people from across Turtle Island and we are grateful to have the opportunity to work on this land.";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-logo-section">
          <img src={uoftlogo} alt="UofT Logo" className="uoft-logo" />
          <img src={clublogo} alt="Club Logo" className="club-logo" />
        </div>
  
        <div className="acknowledgement-section">
          <h2 className="acknowledgement-title">Traditional Land Acknowledgement</h2>
          <p className="acknowledgement-text">
            {landAcknowledgement}
          </p>
        </div>
  
        <div className="footer-info-section">
          <div className="footer-info-name">UTXR 2023</div>
        </div>
      </footer>
    );
  }