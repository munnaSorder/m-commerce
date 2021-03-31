import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const CardItem = (props) => {
    const {name,quantity,img} = props.product;
    return (
        <div className="d-flex align-item-center">
            <img width="60px" height="60px" className="" src={img} alt=""/>
                <div className="item-list">
                    <p>{name}</p>
                    <div className="add-remove d-flex justify-content-end">
                        <button><FontAwesomeIcon icon={faTrash} /></button>
                        <h5 className="mr-3 ml-3">{quantity}</h5>
                        <button><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
        </div>
    );
};

export default CardItem;