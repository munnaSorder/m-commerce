import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import fakeData from '../../fakeData/index'
import ShoppingItem from '../Card/ShoppingItem';
import './home.css'
import { addToDatabaseCart } from '../databaseManager/databaseManager';

const Home = () => {
    const [cart, setCart] = useState([]);
    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        const productQuantity = newCart.filter(pd => pd.key === product.key)
        addToDatabaseCart(product.key, productQuantity.length)
    }
    return (
        <Row className="home-container">
            <Col xs={8} md={8} className="mt-5">
                <Row className="container">
                    {
                        fakeData.map(data => <ShoppingItem data={data} addProduct={addProduct} />)
                    }
                </Row>
            </Col>
            <Col xs={4}>
                <Card cartData={addProduct} />
            </Col>
        </Row>
    );
};

export default Home;