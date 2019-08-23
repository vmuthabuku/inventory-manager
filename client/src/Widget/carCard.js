import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const CarCard = (item) => (
    <Card
     as={NavLink}
     to={`/cars/${item._id}`}
     color="teal"    
    >
   
    <Image src={item.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>
      <Icon color='teal' name="car"><span style={{paddingLeft:"0.5em"}}>{item.make}</span></Icon>
      
      </Card.Header>

      <hr/>
      <Card.Description>
        <Icon color='teal' name="calendar"/> Year: {item.year}
      </Card.Description>
    </Card.Content>
    
  </Card>    
    
 
)

export default CarCard

