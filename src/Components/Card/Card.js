import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './card.css';


const Card = () => {
    return (
        <div className="card-container">
            <h5 className="card-title">Your Order: </h5>
            <div className="item">
               <div className="d-flex align-item-center">
                <img width="60px" height="60px" className="" src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" alt=""/>
                    <div className="item-list">
                        <p>ACEPC 14-inch HD Laptop Computer, 8GB RAM 128GB SSD Windows 10 Pro Laptop PC Intel Celeron J3455(up to 2.3GHz) Notebook, WiFi, Bluetooth 4.2, 4K HDMI</p>
                        <div className="add-remove d-flex justify-content-end">
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                            <h5 className="mr-3 ml-3">1</h5>
                            <button><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
               </div>
               <div className="d-flex align-item-center">
                <img width="60px" height="60px" className="" src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" alt=""/>
                    <div className="item-list">
                        <p>ACEPC 14-inch HD Laptop Computer, 8GB RAM 128GB SSD Windows 10 Pro Laptop PC Intel Celeron J3455(up to 2.3GHz) Notebook, WiFi, Bluetooth 4.2, 4K HDMI</p>
                        <div className="add-remove d-flex justify-content-end">
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                            <h5 className="mr-3 ml-3">1</h5>
                            <button><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
               </div>
               <div className="d-flex align-item-center">
                <img width="60px" height="60px" className="" src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" alt=""/>
                    <div className="item-list">
                        <p>ACEPC 14-inch HD Laptop Computer, 8GB RAM 128GB SSD Windows 10 Pro Laptop PC Intel Celeron J3455(up to 2.3GHz) Notebook, WiFi, Bluetooth 4.2, 4K HDMI</p>
                        <div className="add-remove d-flex justify-content-end">
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                            <h5 className="mr-3 ml-3">1</h5>
                            <button><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
               </div>
            </div>
            <div className="calculation">
                <div className="d-flex justify-content-between">
                    <h5>Delivery Fee: </h5>
                    <h5 className="">00</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Vat+Tax: </h5>
                    <h5 className="">00</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Subtotal: </h5>
                    <h5 className="">00</h5>
                </div>
            </div>
            <button className="btn btn-success w-100">Checkout</button>
        </div>
    );
};

export default Card;