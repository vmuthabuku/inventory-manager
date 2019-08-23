import React from 'react';
import HomeContainer from '../../containers/HomeContainer'
import '../../App.css'
import { Container } from 'semantic-ui-react'
import Layout from '../../hoc/layout'

const Home = () => {
    return (
        <Layout>
            <Container>
                <HomeContainer/>  
            </Container>            
        </Layout>
                  

    );
}

export default Home;
