import React from 'react';
import HomeContainer from '../../containers/HomeContainer'
import '../../App.css'
import { Container } from 'semantic-ui-react'
import Layout from '../../hoc/layout'

const Home = () => {
    return (
        <Container fluid>
            <Layout>
                <HomeContainer/>         
            </Layout>
        </Container>                  

    );
}

export default Home;
