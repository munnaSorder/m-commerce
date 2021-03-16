import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import fakeData from '../../fakeData/index'
import ShoppingItem from '../Card/ShoppingItem';
import './home.css'

const Home = () => {
    console.log(fakeData);
    return (
        <Row className="home-container">
            <Col xs={8} md={8} className="mt-5">
                <Row className="container">
                    {
                        fakeData.map(data => <ShoppingItem data={data} />)
                    }
                </Row>
            </Col>
            <Col xs={4}>
                <Card />
            </Col>
        </Row>
    );
};

export default Home;