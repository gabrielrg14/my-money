import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logout } from '../../auth/authActions'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, email } = this.props.user

        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()} className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`}>
                        <a href="javascript:void(0)" onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toggle"
                            data-toggle="dropdown">
                            <img src="https://fastly.picsum.photos/id/6/160/160.jpg?hmac=Pvc9K4zQ5c03Wo-bQBWDdwKFtIM-C0oj5V5lPOhAp_4" className="user-image" alt="User" />
                            <span className="hidden-xs">{name}</span>
                        </a>

                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="https://fastly.picsum.photos/id/6/160/160.jpg?hmac=Pvc9K4zQ5c03Wo-bQBWDdwKFtIM-C0oj5V5lPOhAp_4"
                                    className="img-circle" alt="User" />
                                <p>{name}<small>{email}</small></p>
                            </li>

                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href="#" onClick={this.props.logout}
                                    className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)