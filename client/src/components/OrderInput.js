import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const OrderInput = props => {

        return (
                <> 
                    <button className="orderAmont" onClick={() => props.increaseCount(props._id, 1)}><FontAwesomeIcon icon={faPlusCircle}/></button>
                    <button className="orderAmont" onClick={() => props.decreaseCount(props._id, 1)}><FontAwesomeIcon icon={faMinusCircle}/></button> 
                </>
        )

}

export default OrderInput;