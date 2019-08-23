import React, { Component } from 'react'
import { auth } from '../actions'
import { connect } from 'react-redux'
import { Loader, Dimmer } from 'semantic-ui-react'

export default function(ComposedClass, reload){
    class AuthenticationCheck extends Component {
        state={
            loading:false
        }

        componentWillMount(){
            this.props.dispatch(auth())
        }
        componentWillReceiveProps(nextProps){
            this.setState({loading:false})

            if(!nextProps.user.login.isAuth){
                if(reload){
                    this.props.history.push('/login')
                }
               
            }
            else{
            if(reload===false){
                this.props.history.push("/cars")
            }
                
            }
        }

        render() {
            console.log(this.props)
            if(this.state.loading){  
                return   <Dimmer active><Loader size='massive'></Loader></Dimmer> 

            }               
           
            return (
                <ComposedClass  {...this.props} user={this.props.user} />
            )
        }
    }

    const mapStateToProps = (state)=>{
        return{
            user: state.user
        } 

    }
    return connect(mapStateToProps)(AuthenticationCheck)
}


