import React, { PureComponent } from 'react'
import {Button ,Form, Grid, Header, TextArea, Popup} from 'semantic-ui-react'
import {getCar, updateCar,deleteCar, clearOnDelete} from '../../actions'
import Layout from '../../hoc/layout'
import {connect} from 'react-redux'
//import EditButton from '../../Widget/EditButton'
import { NavLink } from 'react-router-dom'
import '../../App.css'
const timeoutLength = 15000

class EditPost extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            make:"",
            quantity:"",
            bodytype:"",
            year:"",
            startsell:"",
            instock:"",
            mileage:"",
            price:"",
            color:"",
            description:"",
            image:""

        },
        isOpen: false 

    }
   
    handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

    handleInput = (event, name)=> {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })

    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.dispatch(updateCar(this.state.formdata))
    }

    deletePost = () =>{
        this.props.dispatch(deleteCar(this.props.match.params.id))
    }

    redirectUser = () =>{
        setTimeout(()=>(
            <div>
                This post was deleted
            </div>
            
        ), 2000)
    }

    UNSAFE_componentWillMount(){
        this.props.dispatch(getCar(this.props.match.params.id))
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        let car = nextProps.cars.car
        this.setState({
            formdata:{
                _id:car._id,
                make:car.make,
                quantity:car.quantity,
                bodytype:car.bodytype,
                year:car.year,
                startsell:car.startsell,
                instock:car.instock,
                mileage:car.mileage,
                price:car.price,
                color:car.color,
                description:car.description,
                image:car.image

            }
        })
    }

    UNSAFE_componentWillUnmount(){
        this.props.dispatch(clearOnDelete())
    }


    render() {
        console.log(this.props.cars)   
        let cars = this.props.cars
        return (
            <Layout>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            
       
       
        <Grid.Column style={{ maxWidth: 450 }}>  
        {/* {
                cars.updateCar ?
                <div className="success">
                Updated successfully <Link to={`/cars/${cars.car._id}`} >
                    click to view update

                </Link>

                </div>     
               
                :null
            }       */}
       
            
            <Header  style={{paddingTop:"3em"}} as='h2' color='teal' textAlign='center'>
                Edit Review       
            </Header>
            
            <Form onSubmit={this.submitForm} style={{paddingTop:"1em"}} size='large'>
            <Form.Group unstackable widths={2} >
            <Form.Input
                fluid icon='car' 
                iconPosition='left'
                placeholder='Make'  
                type='make'
                value={this.state.formdata.make}
                onChange={(event)=>this.handleInput(event,'make')}

                />
                
                <Form.Input
                fluid
                icon='car'
                iconPosition='left'
                placeholder='quantity'
                type='quantity'
                value={this.state.formdata.quantity}
                onChange={(event)=>this.handleInput(event,'quantity')}

                />


            </Form.Group>
            <Form.Group unstackable widths={2} >
            <Form.Input
                fluid
                icon='car'
                iconPosition='left'
                placeholder='Body Type'
                type='bodytype'
                value={this.state.formdata.bodytype}
                onChange={(event)=>this.handleInput(event,'bodytype')}

                />
             <Form.Input
                fluid
                icon='calendar'
                iconPosition='left'
                placeholder='Year of Manufacture'
                type='year'
                value={this.state.formdata.year}
                onChange={(event)=>this.handleInput(event,'year')}

                />

                

            </Form.Group>
            <Form.Group unstackable widths={2} >
            
                
                <Form.Input
                fluid
                icon='steam'
                iconPosition='left'
                placeholder='Mileage'
                type='mileage'
                value={this.state.formdata.mileage}
                onChange={(event)=>this.handleInput(event,'mileage')}

                />

                <Form.Input
                    fluid
                    icon='image'
                    iconPosition='left'
                    placeholder='Image link'
                    type='image-link'
                    value={this.state.formdata.image}
                    onChange={(event)=>this.handleInput(event,'image')}

                    /> 


            </Form.Group>     
            <Form.Group unstackable widths={2} >
            <Form.Input
                fluid
                icon='dollar'
                iconPosition='left'
                placeholder='Price'
                type='price'
                value={this.state.formdata.price}
                onChange={(event)=>this.handleInput(event,'price')}

                />
             <Form.Input
                fluid
                iconPosition='left'
                placeholder='color'
                type='colorss'
                value={this.state.formdata.color}
                onChange={(event)=>this.handleInput(event,'color')}

                /> 
            </Form.Group>    

            <Form.Group unstackable widths={2} >
            <Form.Input
                fluid
                name="calendar"
                iconPosition='left'
                placeholder='start sell'
                type='date'
                value={this.state.formdata.startsell}
                onChange={(event)=>this.handleInput(event,'startsell')}

                /> 
             <Form.Input
                fluid
                icon='question circle outline'
                iconPosition='left'
                placeholder='instock'
                type='instock'
                value={this.state.formdata.instock}
                onChange={(event)=>this.handleInput(event,'instock')}

                /> 

            </Form.Group>          

                            
                

                <TextArea
                //fluid
                placeholder='Car Description'
                type='description'
                value={this.state.formdata.description}
                onChange={(event)=>this.handleInput(event,'description')}

                />




          <Popup
            trigger= {<Button type="submit" style={{marginTop:"2em"}} color='teal' fluid size='large'>
                      Edit Car Details
                        </Button>}
            content={"Edited successfully to view the post click"}
            on='click'
            open={this.state.isOpen}
            as={NavLink}
            to={`/cars/${cars.car._id}`}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top right'
          />
                              

                </Form>
                <Button style={{marginTop:"2em"}} color='red' fluid size='large' onClick={this.deletePost}>
                       Delete Car Details
                </Button>
                {
                        cars.updateCar ? 
                        /* <Message
                        as={NavLink}
                        to={`/cars/${cars.car._id}`}
                        success
                        header='Post edited successfully'
                        content="Click to view the edited post"                        
                        /> */
                        <div>                                                            

                        </div>
                       
                        :null
                    }
                    {
                        cars.postDeleted ? 
                       
                        
                        <div>
                            {this.redirectUser()}
                        </div>
                                     
                        :null
                    }
            </Grid.Column>
            </Grid>

            </Layout>
           
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return{
        cars:state.cars
    }

}

export default connect(mapStateToProps)(EditPost)
