import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCars } from '../actions'
import CarCard from './../Widget/carCard'
import Guide from './../Widget/Guide'
import { Card, Grid, Button, Container } from 'semantic-ui-react'
import '../App.css'




const style = {
    marginTop:"1em"
}
class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getCars(4,0,"desc"))      
    }

    renderItems = (cars) =>(
        cars.list ?
            cars.list.map(item=>(

               
                    <CarCard {...item} key={item._id}/>
                                
                    
                               
            )) :
        null        
    )

    loadmore = () =>{
        let count = this.props.cars.list.length
        this.props.dispatch(getCars(4,count,"desc",this.props.cars.list ))

    }

    render() {
        return (
            <Container style={style} fluid>
                <Grid>
                <Grid.Column width={1}>

                </Grid.Column>
                <Grid.Column width={12}>
                <Card.Group itemsPerRow={2}>
                    {this.renderItems(this.props.cars)}                          
                </Card.Group>
                <Button onClick={this.loadmore} style={style} animated='fade' color="teal" basic fluid>
                    <Button.Content visible>Load More</Button.Content>
                    <Button.Content hidden>.......</Button.Content>
                </Button>
                    
                </Grid.Column>
                <Grid.Column width={3}>
                <Guide/>
                    
                </Grid.Column>
            </Grid>

            </Container>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      cars: state.cars
    }
  }

export default connect(mapStateToProps)(HomeContainer)
