import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

import If from '../operator/If'

const TabHeader = props => {
    const selected = props.tab.selected === props.target
    const visible = props.tab.visible[props.target]

    return (
        <If test={visible}>
            <li className={selected ? "active" : ""}>
                <a href="javascript:void(0)"
                    data-toggle="tab" 
                    data-target={props.target} 
                    onClick={() => props.selectTab(props.target)}>
                    <i className={`fa fa-${props.icon}`}></i> {props.label}
                </a>
            </li>
        </If>
    )
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)