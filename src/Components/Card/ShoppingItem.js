import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ShoppingItem = (props) => {
    const {name, img, price} = props.data;
    console.log(name.length);
    return (
        <Col xl={3} lg={3} md={4} sm={12} xs={12} className="mb-3">
            <Card className="card-design">
                <div className="image-container">
                    <Card.Img className="card-image-customize" variant="top" src={img} />
                    <button className="item-add-btn"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <Card.Body className="p-2">
                    <div className="d-flex justify-content-center justify-content-between">
                    <Card.Title>BDT {price}</Card.Title>
                    {/* <del>BDT 680</del> */}
                    </div>
                    <Card.Text>
                        {
                            name.length > 45 ? name.slice(0, 45)+'...' : name
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShoppingItem;