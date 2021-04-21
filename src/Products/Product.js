import React, { Component } from 'react'
import { connect } from "react-redux";
import './Product.css'
import ProductList from '../ProductList/ProductList'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Sidebar from '../Sidebar/Sidebar'
import { Row, Col, Container, Navbar } from "react-bootstrap"
import AddEditPopup from '../Modal/AddEditPopup';


class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectedProduct:{},
      showModal: false,
      isEnabled: true,
      showProducts: false,
      showViewModal: false,
    };
  }

  updateItem=(item)=>{
    this.handleCloseView();
    let {selectedProduct,items}=this.state;
    let itemList =items.map((item)=>{
      if(selectedProduct.id === item.id){
       item.ProductName = selectedProduct.ProductName;
       item.Description = selectedProduct.Description;
       item.Price = selectedProduct.Price;
      }
      return item;
    });
    this.setState({items:itemList})
  }

  addItem = (item) => {
    this.handleCloseModal();
    const items = Object.assign([], this.state.items);
    if (this.state.items.length > 0) {
      const newId = items[items.length - 1].id + 1;
      let newItem = {
        ...item,
        id:newId
      }
      this.setState({
        items: items.concat(newItem)
      })
    }else{
        const newId = 1;
        let newItem = {
          ...item,
        id:newId
        }
        this.setState({
          items: items.concat(newItem)
        })
      }
  }
  


  handleDelete = (id, e) => {
    const filteredItems = this.state.items.filter(item =>item.id !== id);
    this.setState({
      items: filteredItems
    })

  }

  handleView = (id) => {
    const filteredItems = this.state.items.filter(item => {
      if(item.id === id){
       item.Price = item.Price.replace("$","");
      }
      return item
    });
    this.setState({ showViewModal: true,selectedProduct:filteredItems[0]})
  }

  handleCloseView = () => {
    this.setState({ showViewModal: false,selectedProduct:{} })
  }

  handleShowMessageClick = () => this.setState({ showModal: true })
  handleCloseModal = () => this.setState({ showModal: false })
  handleProductList = () => this.setState({ showProducts: !this.state.showProducts })

  render() {
    let {items,showViewModal,showModal,showProducts} = this.state;
    return (
      <ErrorBoundary>
        <Navbar bg="dark" className="justify-content-between" style={{ padding: '20px' }}>
          <Navbar.Brand style={{ color: "white" }}>
            <span>Inventory Portal</span>
          </Navbar.Brand>
        </Navbar>
        <Container style={{ marginTop: '15px' }}>
          <Row>
            <Col md={2}>
              <Sidebar length={items.length}
                add={this.handleShowMessageClick}
                showproducts={this.handleProductList} />
            </Col>
            <Col md={10}>
              <Row>
                {showViewModal && 
                <AddEditPopup 
                mode={"Edit"}
                selectedProduct={this.state.selectedProduct}
                updateItem={this.updateItem}
                handleCloseView={this.handleCloseView}
                />
                
                }
                
                {showModal && 
                <AddEditPopup 
                mode={"Add"}
                addItem={this.addItem}
                handleCloseModal={this.handleCloseModal}
                />}

                {showProducts ? (
                  items.map((productList) => {
                    return (
                      <ProductList key={productList.id}
                        id={productList.id}
                        productName={productList.ProductName}
                        viewDetails={this.handleView}
                        deleteItem={this.handleDelete}>
                        <h5>{productList.Price}</h5>
                        <h6> {productList.Description}</h6>
                      </ProductList>
                    )
                  })
                ) : null}
              </Row>
            </Col>
          </Row>
        </Container>
      </ErrorBoundary>
    )

  }


}
const mapStateToProps = (state) => {
  return {
    loginData: state.loginData,

  }
}

export default connect(mapStateToProps)(Products);