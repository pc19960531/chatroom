import React, { Component } from 'react'
import { Input, Upload, Button } from 'antd';
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'
import Home from './component/home'
import Pages from './pages'
import { Router, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
import { socketInit } from './utils/socket'

class App extends Component {
    // static getEnhancer() {
    //     const h = createHistory({})
    //     const rawPush = h.push
    //     h.push = (...args) => {
    //         rawPush(...args)
    //         window.scrollTo(0, 0) // 切换页面的时候 滚动到头部
    //     }
    //     window.__routerHistory = h
    //     return h
    // }
    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }

    // static getcurrentHistory(){
    //     return App.getEnhancer()
    // }

    // history = App.getEnhancer();
    componentDidMount() {
        socketInit();
    }


    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Pages />
                </BrowserRouter>
            </Provider>
        )
    }
}
//App = connect(state => state)(App)

export default hot(module)(App)