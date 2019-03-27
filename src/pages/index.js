import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from '../component/home'
import SignIn from '../component/signin'
import SignUp from '../component/signup'
import Chat from '../component/chat'

export default () => ([
    <Switch key="content">
        <Redirect exact from="/" to="/home" key='' />
        <Route path="/home" component={Home} key='home' />
        <Route path="/signin" component={SignIn} key='signin' />
        <Route path="/signup" component={SignUp} key='signup' />
        <Route path="/chat" component={Chat} key='chat' />
    </Switch>
])

// class Pages extends Component {
//     render() {
//         return
//     }
// }