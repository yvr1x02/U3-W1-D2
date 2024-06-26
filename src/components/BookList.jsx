import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

import Horror from "../data/books/horror.json"


class BookList extends Component {
    state = {
        viewBook: Horror
    };

    render() {
        return (
           
            <Row className='mx-2'>
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
