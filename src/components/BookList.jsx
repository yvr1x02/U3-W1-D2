import React, { Component } from 'react';
import { Col,  Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import Scifi from '../data/books/scifi.json';
import Horror from "../data/books/horror.json"


class BookList extends Component {
    state = {
        viewBook: Horror
    };

    render() {
        return (
           
            <Row>
                {this.state.viewBook.map(book => {
                    console.log(book);
                    return (
                            <SingleBook book={book} /> 
                    );
                })}
            </Row>
        );
    }
}

export default BookList;
