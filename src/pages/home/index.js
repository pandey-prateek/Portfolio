import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/bg.jpeg"

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image  order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${bgImage})`, objectFit: "fill" }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
              <Link to="/About">
                          <div id="button_h" className="ac_btn btn ac_btn_new">
                          <h2 className="mb-1x">{introdata.title}</h2>
                            <div className="ring one"></div>
                            <div className="ring two"></div>
                            <div className="ring three"></div>
                          </div>
                        </Link>
                
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Container>
                    <Row className="justify-content-md-center">
                      <Col xs lg="5">
                        <Link to="/portfolio" className="text_2">
                          <div id="button_h" className="ac_btn btn ac_btn_padds">
                            My Portfolio
                            <div className="ring one"></div>
                            <div className="ring two"></div>
                            <div className="ring three"></div>
                          </div>
                        </Link>
                      </Col>

                      <Col xs lg="5">
                        <Link to="/contact">
                          <div id="button_p" className="ac_btn btn ac_btn_padds">
                            Contact Me
                            <div className="ring one"></div>
                            <div className="ring two"></div>
                            <div className="ring three"></div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs lg="2"> <Link to="/resume" className="text_2">
                        <div id="button_h" className="ac_btn_padds ac_btn btn ">
                          Resume
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </Link>
                      </Col>
                      
                    </Row>
                   
                  </Container>




                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
