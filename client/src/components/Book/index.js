import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import { Link } from "react-router-dom"
import "./style.css";
import { ListGroup } from "react-bootstrap";

function Book(props) {
  const { title, subtitle, link, authors, description, image, Button } = props;
  return (
    <ListItem>
      <Row>
        <Col size="md-9">
          <h5 className="text-left">{title}</h5>
          <p className="text-left">{subtitle}</p>
          <p className="text-left">Written By {authors}</p>
        </Col>
        <Col size="md-1">
          <a href={link} target="_blank"><button className="btn btn-primary">View</button></a> 
        </Col>
        <Col size="md-1">
          <Button>Save</Button>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <img src={image} alt={title} />
        </Col>
        <Col size="md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}
  

export default Book;
