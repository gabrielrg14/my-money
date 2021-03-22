import React from 'react'

import Navbar from './Navbar'

const Header = props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini">
                <i className="fa fa-money"></i> 
            </span>

            <span className="logo-lg">
                <i className="fa fa-money"></i> 
                <strong> My</strong> Money
            </span>
        </a>

        <nav className="navbar navbar-satic-top">
            <a href="javascript:void(0)" className="sidebar-toggle" data-toggle="offcanvas"></a>
            <Navbar />
        </nav>
    </header>
)

export default Header