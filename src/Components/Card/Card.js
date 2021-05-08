import React, { useEffect, useState } from 'react';
import './card.css';
import CardItem from './CardItem';
import { useHistory } from 'react-router';


const Card = (props) => {
    const history = useHistory();
    const cartReRender = props.data;
    const [cart, setCart] = useState([]);

    // load cart product
    useEffect(() => {
        fetch('http://localhost:5252/getCart')
        .then(res => res.json())
        .then(data => setCart(data))
    },[cartReRender])


    // product increased function
    const productIncrease = (key, name, img, price, quantity) => {
        let count = quantity;
        count = count + 1;
        const updateQuantity = { 
            key: key,
            name: name,
            img: img,
            price: price,
            quantity: count
        }
        fetch(`http://localhost:5252/updateCart/${key}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => cartReload())

    }


    // product decrease function
    const productDecrease = (key, name, img, price, quantity) => {
        let count = quantity;
        count = count - 1;
        const updateQuantity = { 
            key: key,
            name: name,
            img: img,
            price: price,
            quantity: count
        }
        fetch(`http://localhost:5252/updateCart/${key}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => cartReload())
    }

    // product delete function
    const deleteItem = (key) => {
        fetch(`http://localhost:5252/deleteItem/${key}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => cartReload())
    }

    const updateFunctions = { 
        productIncrease,
        productDecrease,
        deleteItem
    }

    // cart re render function
    const cartReload = () => {
        fetch('http://localhost:5252/getCart')
        .then(res => res.json())
        .then(data => {setCart(data)})
    }

    // checkout page route
    const checkout = () => {
        history.push('/checkout')}
    
    // total price calculate area start
    const totalPrice = cart.reduce((total, price) => {
        return total + price.price * price.quantity;
    },0)

    let vat = Math.round(0.12 * totalPrice);
    let subTotal = Math.round(totalPrice);
    // total price calculate area end

    return (
        <div className="card-container">
            <h5 className="card-title">Your Order: </h5>
                {
                    cart.length <= 0 ? <h1>Your Cart is empty</h1> : 
                    <div className="item">
                        {
                            cart.map(( product, index ) => <CardItem updateFunctions={updateFunctions} product={product} key={index} />)
                        }
                    </div>
                }
            
            {
                cart.length <= 0 ? null :
                <>
                    <div className="calculation mt-3">
                        <div className="d-flex justify-content-between mb-2"> 
                            <input type="text" name="voucher" className="form-control mr-3" placeholder="Enter Voucher Code" />
                            <button className="btn btn-success">APPLY</button> 
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Delivery Fee: </h5>
                            <h5 className="">60 TK</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Vat+Tax: </h5>
                            <h5 className="">{vat} TK</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Subtotal: </h5>
                            <h5 className="">{subTotal + vat + 60} TK</h5>
                        </div>
                    </div>
                    <button onClick={checkout} className="btn btn-success w-100">PROCEED TO CHECKOUT</button>
                </>
            }
        </div>
    );
};

export default Card;