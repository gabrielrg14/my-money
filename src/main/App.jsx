import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from '../common/template/Header'
import Footer from '../common/template/Footer'
import SideBar from '../common/template/SideBar'
import Messages from '../common/messages/Messages'

const App = props => (
    <HashRouter>
        <div className="wrapper">
            <Routes />
            <Header />
            <SideBar />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
)

export default App