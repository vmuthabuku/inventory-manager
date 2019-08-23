import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCarPost} from '../../actions'
// import { Image,Segment, Grid, Header, Button} from 'semantic-ui-react'
import '../../App.css'
import CarTemplate from './carTemplate'
import Layout from '../../hoc/layout'


class CarView extends Component {
    componentWillMount(){
        this.props.dispatch(getCarPost(this.props.match.params.id))

    }
    renderCars = (cars) => (
        cars.car ?   
        <div>
        <CarTemplate {...cars }/>
                   
        

        </div>:null     

    )


    render() {
        let cars = this.props.cars
        return (
            <Layout>
           {this.renderCars(cars)}
                
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      cars: state.cars
    }
  }

export default connect(mapStateToProps)(CarView);
