import React from 'react';
import Products from "../../mocks/products";
import { useParams } from "react-router-dom";
import "./itemDetCont.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDetailContainer(){
  const params = useParams();
  const product = Products.find((productMock) => productMock.id == params.id);

  return(
    <div className='divCard'> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Subtitle>{product.money} {product.price}</Card.Subtitle>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

  
export default ItemDetailContainer;