import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from '../Card/Card';

const Home = () => {
    return (
        <Row>
            <Col xs={8}>
                <h1>Hello</h1>
            </Col>
            <Col xs={4}>
                <Card />
            </Col>
        </Row>
    );
};

export default Home;