import React from 'react' 
import {Card} from 'react-bootstrap'
import './ProductList.css'
import { Button } from 'react-bootstrap'

const ProductList = (props)=> {
  return (
    <div md={3} className="blkMargin">
    <Card style={{ width: '18rem' , padding : '10px' }}>
    <Card.Title>
        {props.productName}
    </Card.Title>
    { <Card.Text>
        {props.children}
    </Card.Text> 
    }
    <Button variant="primary"  onClick={()=>props.viewDetails(props.id)}>Edit Product</Button>
    <Button style={{ marginTop:'5px'}} variant="primary"  onClick = {() => props.deleteItem(props.id)}>Remove</Button>
   </Card>
   </div>
  )
   }

export default ProductList
