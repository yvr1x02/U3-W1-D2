import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };


  selectedCard =() =>{
    this.setState({selected: !this.state.selected});
  }
  

  render() {
    const book = this.props.book;
 

    return (
      <Col sm={4} md={3} lg={2} >
        <Card onClick={this.selectedCard} style={{border: this.state.selected ? "2px solid  red" : "1px solid black"}}>
          <Card.Img variant='top' src={book.img} />
          <Card.Body>
            <Card.Title className='text-truncate'>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
