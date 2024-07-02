import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, onBookSelect, isSelected }) => {
  //book onBookSelect isSelected HandleClick
  const handleClick = () => {
    onBookSelect(book.asin);
  };

  return (
    <Card onClick={handleClick} style={{ border: isSelected ? "3px solid red" : "none" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
