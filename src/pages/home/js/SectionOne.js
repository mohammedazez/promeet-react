import React from "react";
import { Jumbotron, Container, Button, Row, Col } from "react-bootstrap";
import "../css/SectionOne.css";

function SectionOne() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Lengkapi Kebutuhan Rumah Tangga Anda</h1>
          <p>
            Kami menyediakan kebutuhan rumah tangga anda dengan anda tetap
            dirumah saja.
          </p>
          <Button className="text-left" variant="primary">
            Cari Produk sekarang
          </Button>
          <Row>
            <Col>
              <img
                style={{ maxWidht: "100%", height: "88px", width: "88px" }}
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604246542/leader_u0fug8.png"
              />
              <h3>1K Products</h3>
            </Col>
            <Col>
              <img
                style={{ maxWidht: "100%", height: "88px", width: "88px" }}
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604246542/shipping_qms4p8.png"
              />
              <h3>10K Members</h3>
            </Col>
            <Col>
              <img
                style={{ maxWidht: "100%", height: "88px", width: "88px" }}
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604246542/location_huh4vl.png"
              />
              <h3>50 Locations</h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default SectionOne;
