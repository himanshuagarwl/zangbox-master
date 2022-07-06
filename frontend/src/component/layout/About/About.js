import React from "react";
import About1 from "./about01.jpg";
import About2 from "./about02.jpg";
import Chef1 from "./chef01.jpg";
import Chef2 from "./chef02.jpg";
import Chef3 from "./chef03.jpg";

import "./About.css";

function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h2>It started, quite simply, like this...</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                sequi. Suscipit, eveniet aliquid?
                <br />
                <br /> Perferendis voluptatum et reprehenderit, ducimus beatae
                provident dolorum sequi magni enim voluptas. Repellat recusandae
                placeat dolorum ipsum? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Cum delectus laboriosam nemo perspiciatis,
                natus beatae incidunt ut, veritatis,
                <br />
                <br /> tenetur asperiores magnam? Laudantium, dolores eos?
                Aperiam corporis reiciendis excepturi similique tempore.
              </p>
            </div>
          </div>
          <div className="image-section">
            <img className="img1about" src={About1} alt="" />
            <img className="img2" src={About2} alt="" />
          </div>
        </div>
      </div>

      <section className="team-section">
        <div className="team-container">
          <div className="row">
            <div className="title">
              <h1>Our Team</h1>
              <p>
                Perferendis voluptatum et reprehenderit, ducimus beatae
                provident dolorum sequi magni enim voluptas. Repellat recusandae
                placeat dolorum ipsum?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="team-items">
              <div className="item">
                <img src={Chef1} alt="Chef 1" />
                <div className="inner">
                  <div className="info">
                    <h5>John Doggett</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit quis cupiditate vel.
                    </p>
                    <hr />
                    <div className="social-links">
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={Chef2} alt="Chef 2" />
                <div className="inner">
                  <div className="info">
                    <h5>Jeffrey Spender</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit quis cupiditate vel.
                    </p>
                    <hr />
                    <div className="social-links">
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={Chef3} alt="Chef 3" />
                <div className="inner">
                  <div className="info">
                    <h5>Monica Reyes</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit quis cupiditate vel.
                    </p>
                    <hr />
                    <div className="social-links">
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="https://www.instagram.com/_iamabhisheksharma__/">
                        <span className="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
