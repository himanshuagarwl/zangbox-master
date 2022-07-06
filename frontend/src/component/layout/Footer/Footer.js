import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <>
      <hr id="hrcolor" />
      <div className="Footer">
        {/* Left Side ==>*/}

        <div className="footerleftside">
          <div id="logotext">
            Krisk<span id="logtext">i</span>mart
          </div>
          <div className="lefttext">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              neque beatae, atque distinctio veritatis, a sequi sint laboriosam
              voluptas ad sapiente magni at eius nam repudiandae
            </p>
          </div>
          <div id="followus">
            Follow Us
            <div className="media">
              <FacebookIcon className="Facebook icontext" />
              <TwitterIcon className="Twitter icontext" />
              <YouTubeIcon className="Youtube icontext" />
              <InstagramIcon className="Instagram icontext" />
            </div>
          </div>
        </div>

        {/* Left Middle Side */}

        <div className="contactfooter">
          <span id="cf">CONTACT INFO</span>
          <div className="contacttitle">
            <span className="ct">Address:</span>
            <div className="contactdata">
              No. 5C/3A, Madha Street, Ragavendra Nagar, Irrandamkattalai,
              Kovur, Thandalam, Chennai - 600122
            </div>
          </div>
          <div className="contacttitle">
            <span className="ct">Phone:</span>
            <div className="contactdata">
              99999 99999, Druv
              <br />
            </div>
          </div>
          <div className="contacttitle">
            <span className="ct">Email:</span>
            <div className="contactdata">
              help.zang@gmail.com
              <br />
              support.zang@gmail.com
            </div>
          </div>
        </div>

        {/* Right Middle Side */}

        <div className="contactfooter">
          <span id="cf">USEFUL LINKS</span>
          <br />
          <div className="cf">
            <Link to="/" className="lt lth">
              Privacy Policy
            </Link>
            <br />
            <Link to="/" className="lt">
              Terms & Conditions
            </Link>
            <br />
            <Link to="/Contact" className="lt">
              Contact Us
            </Link>
            <br />
            <Link to="/About" className="lt">
              Our Team
            </Link>
            <br />
            <Link to="/About" className="lt">
              About Us
            </Link>
            <br />
          </div>
        </div>
        <div>
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5299115955313!2d80.1098940148223!3d13.001890990836044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdffd56ed150bdc45!2zMTPCsDAwJzA2LjgiTiA4MMKwMDYnNDMuNSJF!5e0!3m2!1sen!2sin!4v1656612088716!5m2!1sen!2sin"
            allowfullscreen=""
            title="hello"
            loading="lazy"
          />
        </div>
        {/* Maps of company */}
      </div>

      {/* Bottom Line */}

      <div className="bottom">
        <span id="cpt">
          ©Copyright 2022-<span className="textcolor">2023</span> | All Rights
          Reserved | Zangbox by <span className="textcolor">Chef@Home</span>
        </span>
      </div>
    </>
  );
}

export default Footer;
