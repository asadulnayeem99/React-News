import React from "react";
import { Button, Card } from "react-bootstrap";
const News = (props) => {
  const { title, description } = props.article;
  return (
    <Card className="p-4" style={{ width: "75rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default News;
