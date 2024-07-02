import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  /* state = {
    searchQuery: "",
    selectedBookAsin: null,
  };
 */
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col xs={12} md={8}>
          <Row>
            {books
              .filter((b) => b.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook book={b} onBookSelect={handleBookSelect} isSelected={selectedBookAsin === b.asin} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
