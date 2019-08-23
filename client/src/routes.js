import React from 'react';
import {Switch, Route } from "react-router-dom"
// import Layout from './hoc/layout'
import CarView from './components/Car/carview'
import Home from './components/Home/Home'
import Login from './containers/Admin/Login'
import AddPost from './containers/Admin/AddPost'
import EditPost from './containers/Admin/EditPost'
import Delete from './containers/Admin/Delete'

import Auth from './hoc/auth'

const Routes = () =>{
    return(
        <>
            <Switch>            
                <Route path='/' exact component={Auth(Login, null)} />   
                <Route path='/cars' exact component={Auth(Home, null)} />   
                <Route path='/post' exact component={Auth(AddPost, null)} />             
                <Route path='/cars/:id' exact component={Auth(CarView, null)} />
                <Route path='/cars/edit/:id' exact component={Auth(EditPost, null)} />
                <Route path='/cars/delete/:id' exact component={Auth(Delete, null)} />

               
            </Switch>
        </>
    )   
}
export default Routes;