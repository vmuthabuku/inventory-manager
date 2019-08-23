import React from 'react'
import { Button, Grid, Popup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const timeoutLength = 15000
// const linked = (props) => {
//     let cars = props.cars.car
// }

class EditButton extends React.Component {
    
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

//   linkShow = (props) =>{
//     props.cars.car
//   }

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Popup
            trigger= {<Button type="submit" style={{marginTop:"2em"}} color='teal' fluid size='large'>
                      Edit Car Details
                        </Button>}
            content={"Edited successfully to view the post click"}
            on='click'
            open={this.state.isOpen}
            as={NavLink}
            to={`/cars/${this.props.cars.car._id}`}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top right'
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default EditButton
