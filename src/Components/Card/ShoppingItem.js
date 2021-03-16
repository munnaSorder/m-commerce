import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const ShoppingItem = (props) => {
    console.log(props);
    const {name, url} = props.data;
    return (
        <Col xs={3} className="mb-3">
            <Card>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShoppingItem;