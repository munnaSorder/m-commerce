import React, { useEffect, useState } from 'react';
import './card.css';
import { addToDatabaseCart, getDatabaseCart } from '../databaseManager/databaseManager';
import fakeData from '../../fakeData';
import CardItem from './CardItem';
import { useHistory } from 'react-router';


const Card = (props) => {
    const history = useHistory();
    const data = props.data;
    const [cart, setCart] = useState([]);
    
   console.log(cart);

    useEffect(() => {
        const cardItems = getDatabaseCart();
        const itemsKeys = Object.keys(cardItems)
        const cardProducts = itemsKeys.map(key => {
            const product = fakeData.find(product => product.key === key)
            product.quantity = cardItems[key]
            return product;
        });
        setCart(cardProducts);
    },[data])

    const checkout = () => {
        history.push('/checkout')
    }
    
    const totalPrice = cart.reduce((total, price) => {
        return total + price.price * price.quantity;
    },0)

    let vat = Math.round(0.12 * totalPrice);
    let subTotal = Math.round(totalPrice);
    
    return (
        <div className="card-container">
            <h5 className="card-title">Your Order: </h5>
                {
                    cart.length <= 0 ? <h1>Your Cart is empty</h1> : 
                    <div className="item">
                        {
                            cart.map(product => <CardItem product={product} />)
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