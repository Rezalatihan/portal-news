import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardNews = (props) => {
  return (    
    <Card style={{ width: '17rem', marginRight: "4px", marginBottom: '4px' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.description}
        <p >Published at : {props.date}</p>
      </Card.Text>
      < a href={props.url}>
      <Button variant="primary">detail</Button>
      </a>
      
    </Card.Body>
  </Card>
  )
}

export default CardNews