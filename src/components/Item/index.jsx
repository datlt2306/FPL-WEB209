import React from 'react';
import PropTypes from "prop-types";


const Item = (props) => {
  const removeItem = (id) => {
    
  };
  return (
    <div>{props.product.name}<button onClick={() => props.onHandleRemove(props.product.id)}>Delete</button></div>
  )
}

export default Item