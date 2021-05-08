import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart } from '../databaseManager/databaseManager';
import MyVerticallyCenteredModal from '../Modal/Modal';




const ShoppingItem = (props) => {
    const {name, img, price, key} = props.data;
    const [modalShow, setModalShow] = useState(false);
    return (
        <Col xl={3} lg={3} md={4} sm={12} xs={12} className="mb-3">
            <Card className="card-design">
                <div className="image-container">
                    <Card.Img className="card-image-customize" variant="top" src={img} />
                    <button onClick={() => props.addProduct (props.data)} className="item-add-btn"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <Card.Body className="p-2">
                    <div className="d-flex justify-content-center justify-content-between">
                    <Card.Title>BDT {price}</Card.Title>
                    {/* <del>BDT 680</del> */}
                    </div>
                    <Card.Text onClick={() => setModalShow(true)}  style={{cursor: "pointer", color: "#0e0e94"}}>
                        {
                            name.length > 45 ? name.slice(0, 45)+'...' : name
                        }
                    </Card.Text>
                    {/* <MyVerticallyCenteredModal
                        productkey={key}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    /> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShoppingItem;