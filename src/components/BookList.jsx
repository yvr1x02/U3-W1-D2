import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBookAsin: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col xs={12} md={8}>
            <Row>
              {this.props.books
                .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      onBookSelect={this.handleBookSelect}
                      isSelected={this.state.selectedBookAsin === b.asin}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            {this.state.selectedBookAsin && <CommentArea asin={this.state.selectedBookAsin} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
