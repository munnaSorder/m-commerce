import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Card from '../Card/Card';
import ShoppingItem from '../Card/ShoppingItem';
import './home.css'
import { CartContext, UserContext } from '../../App';
import ProductNav from '../Nav/ProductNav';

const Home = () => {
    const [ user ] = useContext(UserContext);
    const [globalCart, setGlobalCart] = useContext(CartContext)
    
    // product cart state
    const [cart, setCart] = useState([]);


    const [dbCart, setDbCart] = useState([])
    console.log(dbCart);
    // product state
    const [allProductList, setAllProductList] = useState([]);
    
    // handle add product
    const addProduct = (product) => {
        console.log("product", product);
        const {_id, key, name, img, price} = product;
        
        const newCart = [...cart, product];
        setCart(newCart)

        const newItems = { 
            _id,
            key,
            name,
            img,
            price,
            quantity : 1,
            email: user.email
        }

        fetch('http://localhost:5252/getCart')
        .then(res => res.json())
        .then(data => {
            const filterData = data.filter(doc => doc._id === _id)
            
            if(!filterData.length > 0){
                fetch('http://localhost:5252/addCart', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(newItems)
                })
                .then(res => res.json())
                .then(result => console.log(result))

                setDbCart(data)
                setGlobalCart(data)
            }

            const findData = dbCart.find(data => data._id === _id)
            console.log(dbCart);
            if(filterData.length > 0) {
                console.log('update hit');
                console.log(findData);
                let quantityIncreased = findData.quantity + 1
                const updateQuantity = { 
                    key: findData.key,
                    name: findData.name,
                    img: findData.img,
                    price: findData.price,
                    quantity: quantityIncreased
                }
                console.log(updateQuantity);
                fetch(`http://localhost:5252/updateCart/${_id}`,{
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(updateQuantity)
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
        })

    }
    console.log(globalCart);
    // load all product from database
    useEffect(() => {
        setAllProductList(false)
        fetch('http://localhost:5252/loadAllProduct')
        .then(res => res.json())
        .then(data => setAllProductList(data))

        fetch('http://localhost:5252/getCart')
        .then(res => res.json())
        .then(data => setDbCart(data))
    },[])

    return (
        <Row className="home-container">
            <Col xs={8} md={8} style={{ padding : '0px 0px 0px 10px'}}>
            <ProductNav />
                {
                    allProductList ? (
                        <Row className="container">
                            {
                                allProductList.map(( data, index ) => <ShoppingItem data={data} addProduct={addProduct} key={index} />)
                            }
                        </Row>          
                    ):(
                        <div style={{textAlign: 'center', marginTop: '200px'}}>
                            <Spinner animation="border" variant="primary"/>
                        </div>
                    ) 
                }
            </Col>
            <Col xs={4} style={{padding : '0px'}}>
                <Card cartData={addProduct} data={dbCart} />
            </Col>
        </Row>
    );
};

export default Home;