import '../common/template/dependencies'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import { validateToken } from '../auth/authActions'

import Auth from '../auth/Auth'
import App from './App'

class AuthOrApp extends Component {

    componentDidMount() {
        if(this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth

        if(user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token
            return <App />
        } else if(!user && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)