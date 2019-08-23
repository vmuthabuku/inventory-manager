import React, { Component } from 'react'
import {Button ,Form, Grid, Header, TextArea, } from 'semantic-ui-react'
import {addPost, clearCar} from '../../actions'
import Layout from '../../hoc/layout'
import {connect} from 'react-redux'

class AddPost extends Component {
    state = {
        formdata:{
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

        }
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
        this.props.dispatch(addPost({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
        

    }

    componentWillUnmount(){
        this.props.dispatch(clearCar())
    }

    render() {
        console.log(this.props)
        return (
            <Layout>
                     <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header  style={{paddingTop:"3em"}} as='h2' color='teal' textAlign='center'>
                Add Review       
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



                <Button style={{marginTop:"1em"}} color='teal' fluid size='large'>
                       Submit Car Details
                </Button>

                </Form>
                {/* {
                        this.props.car.newcar.success ? 
                        <div style={{color:'green'}} >
                            Car added successfully
                        </div>
                        :null
                    } */}
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

export default connect(mapStateToProps)(AddPost)
