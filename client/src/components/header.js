import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'



class Layout extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container fluid>
           <Menu secondary>
        <Menu.Item 
        name='home'
        as={NavLink}
        to="/cars" 
        active={activeItem === 'home'} 
        onClick={this.handleItemClick} />

        <Menu.Item
          name='Add a post'
          as={NavLink}
          to="/post" 
          active={activeItem === 'Add a post'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            as={NavLink}
            to="/" 
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      </Container>
     
      
    )
  }
}

export default Layout