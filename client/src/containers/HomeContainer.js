import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCars } from '../actions'
import CarCard from './../Widget/carCard'
import Guide from './../Widget/Guide'
import { Card, Grid } from 'semantic-ui-react'
import '../App.css'

class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getCars(8,0,"desc"))      
    }

    renderItems = (cars) =>(
        cars.list ?
            cars.list.map(item=>(

               
                    <CarCard {...item} key={item._id}/>
                                
                    
                               
            )) :
        null        
    )

    render() {
        return (
            <Grid>
                <Grid.Column width={1}>

                </Grid.Column>
                <Grid.Column width={12}>
                <Card.Group itemsPerRow={2}>
                    {this.renderItems(this.props.cars)}                          
                </Card.Group>
                    
                </Grid.Column>
                <Grid.Column width={3}>
                <Guide/>
                    
                </Grid.Column>
            </Grid>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      cars: state.cars
    }
  }

export default connect(mapStateToProps)(HomeContainer)
