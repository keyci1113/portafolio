import React, { useState } from "react";
import imagen from "../Utilidades/imagen.jpg";
import profilepic from "../Utilidades/profile-pic.jpg";
import { Link, Route } from "react-router-dom";
import "../css/index.css";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardImgOverlay,
  CardTitle,
  CardSubtitle,
  Container,
  Button,
} from "reactstrap";

function Profile() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>clicks {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>

      <Container className="themed-container">
        <Row xs="2 ">
          <Col xs="4">
            <Card className="hovercard Alex ">
              <CardImg top width="100%" src={imagen} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Alex Diaz</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Desarrollador Web,DevOps
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="success">Saber Mas</Button>

                <Link to="../Alex/index.js" className="link">
                  Página 1
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="hovercard Keyci">
              <CardImg top width="100%" src={profilepic} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Keyci Padilla</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  UX/UI
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="success">Saber Mas</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Profile;
