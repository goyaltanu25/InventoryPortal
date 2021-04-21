import React from 'react';
import './Sidebar.css';

const sidebar = (props) => {
   return (
    <div className="sidebar">
      <h4>Available Products: {props.length}</h4>
      <button type="button" className="primary" onClick={props.add}>Add Product</button>
      <button type="button" className="primary" onClick={props.showproducts}>Show Products</button>
    </div>
   )
}

export default sidebar;