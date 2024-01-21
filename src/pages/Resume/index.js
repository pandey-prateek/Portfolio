import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import pdf from "../../assets/docs/Prateek_Pandey_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/TextLayer.css";

export const Resume = () => {
  const [width, setWidth] = useState(1200);
  console.log(width)
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            id="button_p" className="ac_btn btn "
          >
            <AiOutlineDownload />
            &nbsp;Download
            <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
          </Button>
          </Col>
        </Row>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false}/>
          </Document>
        </Row>
        
        
        
      </Container>
    </HelmetProvider>
  );
};
