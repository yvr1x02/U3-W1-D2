import { Button, Card, Col, Row } from 'react-bootstrap';
import Scifi from '../data/books/scifi.json';
import Horror from '../data/books/horror.json';
import { Component } from 'react';


class AllTheBooks extends Component{
    state = {
        viewBook: Scifi
}
render(){
    return(
        <Row>
            {this.state.viewBook.map(Book => {
                console.log(Book)
                return(
                    <Col sm={4} md={3} lg={2}>
                    <Card className='m-4'>
                        <Card.Img variant='top' src ={Book.img}/>
                        <Card.Body>
                            <Card.Title className='text-truncate'>{Book.title}</Card.Title>
                            <Card.Text>Price: {Book.price}€ </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Button variant='primary'>Shop</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}

        </Row>
    )
}
}


export default AllTheBooks