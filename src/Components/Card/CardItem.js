import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faMinus } from '@fortawesome/free-solid-svg-icons';
const CardItem = (props) => {
    const {name,quantity,img, key, price} = props.product;
    const {productIncrease, productDecrease, deleteItem} = props.updateFunctions;
 
    return (
        <div className="d-flex align-item-center">
            <img width="60px" height="60px" className="pr-2" src={img} alt=""/>
                <div className="item-list">
                    <p>{name}</p>
                    <div className="add-remove d-flex justify-content-end">
                        {
                            quantity > 1 ? <button onClick={() => productDecrease (key, name, img, price, quantity)}><FontAwesomeIcon icon={faMinus} /></button> :
                            <button onClick={() => deleteItem (key)}><FontAwesomeIcon icon={faTrash} /></button>
                        }
                        <h5 className="mr-3 ml-3">{quantity}</h5>
                        <button><FontAwesomeIcon onClick={() => productIncrease (key, name, img, price, quantity)} icon={faPlus} /></button>
                    </div>
                </div>
        </div>
    );
};

export default CardItem;