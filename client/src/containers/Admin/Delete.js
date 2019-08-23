import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteCar, clearOnDelete} from '../../actions'
import { Popup, Header, Icon, Modal, Button } from 'semantic-ui-react'
import '../../App.css'

const timeoutLength = 150000

const ButtonPosition = {
    position:"absolute",
    top:"50%",
    left:"50%"
}

class Delete extends React.Component {
    
    state = { isOpen: false }

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

    deletePost = () =>{
        this.props.dispatch(deleteCar(this.props.match.params.id))
    }

    UNSAFE_componentWillUnmount(){
        this.props.dispatch(clearOnDelete())
    }

//   linkShow = (props) =>{
//     props.cars.car
//   }

  render() {
    return (
        <Modal trigger= {
            <Button 
            style={ButtonPosition}
           basic color="teal"
           size="huge"
           animated='vertical'>
             <Button.Content hidden>Delete</Button.Content>
             <Button.Content visible>
                 <Icon name='delete' />
             </Button.Content>
         </Button>
           
           } 
               basic size='small'>
             <Header icon='trash' content='Archive Old Messages' />
             <Modal.Content>
               <p>
                 Are you sure you  want to delete this post
               </p>
             </Modal.Content>
             <Modal.Actions>
             <Popup
                trigger= {<Button onClick={this.deletePost} style={{marginTop:"2em"}} color='teal' fluid size='large'>
                            Delete car details
                            </Button>}
                content={"Deleted succcessfully, Click to exit page"}
                on='click'
                open={this.state.isOpen}
                as={NavLink}
                to="/cars"
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                position='top right'
            />
             </Modal.Actions>
         </Modal>
         
    )
  }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return{
        cars:state.cars
    }

}

export default connect(mapStateToProps)(Delete)
