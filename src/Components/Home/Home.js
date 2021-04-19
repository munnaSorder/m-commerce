import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import fakeData from '../../fakeData/index'
import ShoppingItem from '../Card/ShoppingItem';
import './home.css'
import { addToDatabaseCart } from '../databaseManager/databaseManager';
import { UserContext } from '../../App';
import ProductNav from '../Nav/ProductNav';


const Home = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)

        const productQuantity = newCart.filter(pd => pd.key === product.key)
        addToDatabaseCart(product.key, productQuantity.length)
    }
    
    return (
        <Row className="home-container">           
            <Col xs={8} md={8} style={{ padding : '0px 0px 0px 10px'}}>
            <ProductNav />
                <Row className="container">
                    {
                        fakeData.map(data => <ShoppingItem data={data} addProduct={addProduct} />)
                    }
                </Row>
            </Col>
            <Col xs={4} style={{padding : '0px'}}>
                <Card cartData={addProduct} data={cart} />
            </Col>
        </Row>
    );
};

export default Home;