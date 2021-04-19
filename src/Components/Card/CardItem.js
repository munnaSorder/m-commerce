import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faMinus } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart, removeFromDatabaseCart } from '../databaseManager/databaseManager';
const CardItem = (props) => {
    const {name,quantity,img, key} = props.product;

    let count = quantity;

    const productIncrease = (key) => {
        count = count + 1;
        addToDatabaseCart(key, count)
        window.location.reload();
    }
    const deleteItem = (key) => {
        removeFromDatabaseCart(key);
        window.location.reload();
    }
    const productDecrease = (key) => {
        count = count - 1;
        count > 0 && addToDatabaseCart(key, count)
        window.location.reload();
    }

    
    return (
        <div className="d-flex align-item-center">
            <img width="60px" height="60px" className="pr-2" src={img} alt=""/>
                <div className="item-list">
                    <p>{name}</p>
                    <div className="add-remove d-flex justify-content-end">
                        {
                            quantity > 1 ? <button onClick={() => productDecrease (key)}><FontAwesomeIcon icon={faMinus} /></button> :
                            <button onClick={() => deleteItem (key)}><FontAwesomeIcon icon={faTrash} /></button>
                        }
                        <h5 className="mr-3 ml-3">{quantity}</h5>
                        <button><FontAwesomeIcon onClick={() => productIncrease (key)} icon={faPlus} /></button>
                    </div>
                </div>
        </div>
    );
};

export default CardItem;