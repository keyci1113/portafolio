import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "../../css/imagenes.css";
import profilepic from "../../Utilidades/profile-pic.jpg";
import Layout from "../../components/Layout";

export class Keyci extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Row>
              <Col xs="3">
                <div className="pull-left image">
                  <img src={profilepic} alt="User Image" />
                </div>
              </Col>
              <Col xs="9">
                <h3></h3>
                <p>Info info info</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    );
  }
}
export default Alex;
