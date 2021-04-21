import React, { Component } from 'react'
import {Button, Form} from "react-bootstrap"

const parentContainer={
    zIndex:3,
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
}

const modalContainer={
    zIndex:4,
    padding: 20,
    background: '#fff',
    borderRadius: '2px',
    display: 'inline-block',
    minHeight: '300px',
    margin: '1rem',
    position: 'relative',
    minWidth: '400px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    justifySelf: 'center',
}

class AddEditPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                ProductName: '',
                Price: '',
                Description: ''
            }
        }
    }

    componentDidMount() {
        let { selectedProduct } = this.props
        if (selectedProduct && Object.keys(selectedProduct).length > 0) {
            this.setState({ item: selectedProduct });
        }
    }

    handleInput = (e) => {
        e.preventDefault();
        let { item } = this.state;
        switch (e.target.name) {
            case "description": item.Description = e.target.value; break;
            case "price": item.Price = e.target.value; break;
            case "prdName": item.ProductName = e.target.value; break;
            default:return;
        }
        this.setState({ item })
    }

    addUpdate = () => {
        let { mode } = this.props;
        let { item } = this.state;
        mode === "Edit" ? this.props.updateItem(item) : this.props.addItem(item);
    }

    render() {
        let { item } = this.state;
        return (
            <div style={parentContainer}
            >
                <div style={modalContainer}>
                    <Form>
                        <Button className="closebtn" onClick={this.props.mode !== "Edit" ? this.props.handleCloseModal : this.props.handleCloseView}>X </Button>
                        <div className="hdng"> {this.props.mode === "Edit" ? "Update" : "Add"} Product </div>
                        <hr />
                        <Form.Group controlId="itemName">
                            <Form.Label>Item Name :</Form.Label>
                            <Form.Control required
                                name="prdName"
                                type="text" placeholder="Enter ProductName"
                                value={item.ProductName}
                                onChange={this.handleInput}
                            />
                        </Form.Group>
                        <Form.Group controlId="itemPrice">
                            <Form.Label>Price :</Form.Label>
                            <Form.Control required name="price"
                                type="number" min="100" max="1000"
                                placeholder="Enter Price " value={item.Price}
                                onChange={this.handleInput} />
                        </Form.Group>
                        <Form.Group controlId="itemDescription">
                            <Form.Label>Description :</Form.Label>
                            <Form.Control required name="description"
                                type="text" placeholder="Enter Description"
                                value={item.Description}
                                onChange={this.handleInput}
                            />
                        </Form.Group>
                    </Form>
                    <Button type="submit" id="submitbtn" variant="primary" onClick={this.addUpdate} >
                        {this.props.mode === "Edit" ? "Update" : "Add"}
                    </Button>

                </div>

            </div>
        )
    }
}
export default AddEditPopup;