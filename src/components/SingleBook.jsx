import React from 'react';
import { Card, Col } from 'react-bootstrap';




const SingleBook = ({ book }) => {
    return (
        <Col sm={4} md={3} lg={2}>
        <Card className='m-4'>
            <Card.Img variant='top' src ={book.img}/>
            <Card.Body>
                <Card.Title className='text-truncate'>{book.title}</Card.Title>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default SingleBook;
