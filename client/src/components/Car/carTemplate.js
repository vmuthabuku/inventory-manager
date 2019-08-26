import React from 'react';
import { Image,Segment, Grid, Header,Button, Icon, Card, Container} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import '../../App.css'


const CarTemplate = (cars) => {
    return (
        <Container fluid>
            <Image src={cars.car.image} className="img"  />
        <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header color="teal" as='h3' style={{ fontSize: '2em' }}>
              Car Description
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              {cars.car.description}
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <Card color="teal">
            <Card.Content>
                <Card.Meta ><Icon name="car" color="teal" style={{paddingRight:"2em"}}/>Model: {cars.car.make}</Card.Meta><hr></hr>
                <Card.Meta><Icon name="car" color="teal" style={{paddingRight:"2em"}} />Quantity Left: {cars.car.quantity}</Card.Meta><hr></hr>
                <Card.Meta><Icon name="calendar" color="teal" style={{paddingRight:"2em"}}/>Year of manufacture: {cars.car.year}</Card.Meta><hr></hr>
                <Card.Meta><Icon name="question circle outline" color="teal" style={{paddingRight:"2em"}}/>In stock: {cars.car.instock}</Card.Meta><hr></hr>
                <Card.Meta><Icon name="dollar" color="teal" style={{paddingRight:"2em"}}/>Price: {cars.car.price}</Card.Meta><hr></hr>
                <Card.Meta><Icon name="calendar" color="teal" style={{paddingRight:"2em"}}/>Start Sell Date: {cars.car.startsell}</Card.Meta><hr></hr>
                
            </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> 
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header color="teal" as='h3' style={{ fontSize: '2em' }}>
              Mileage
            </Header>
            <p style={{ fontSize: '1.33em' }}>{cars.car.mileage}</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' color="teal" style={{ fontSize: '2em' }}>
              Color
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              {cars.car.color}
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' color="teal" style={{ fontSize: '2em' }}>
             Transmission
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Manual
            </p>
          </Grid.Column>
          <Grid.Row></Grid.Row>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column textAlign='center'>
        <Button  
        as={NavLink}
        to={`edit/${cars.car._id}`} 
        basic color="teal"
        size="huge" 
        animated='vertical'>
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible>
                <Icon name='edit' />
            </Button.Content>
        </Button>
        <Button  
        as={NavLink}
        to={`delete/${cars.car._id}`} 
        basic color="teal"
        size="huge" 
        animated='vertical'>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
                <Icon name='delete' />
            </Button.Content>
        </Button>       
            
          </Grid.Column>
        
        </Grid.Row>
        </Grid>
        
    </Segment>
            
        </Container>
    );
}

export default CarTemplate;
