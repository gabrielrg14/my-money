import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdateTab, showDeleteTab } from './billingCycleActions'

const BillingCycleList = props => {

    function renderRows() {
        const list = props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td> 
                <td>{bc.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => props.showUpdateTab(bc)}>
                        <i className="fa fa-pencil"></i>
                    </button>

                    <button className="btn btn-danger ml-5px" onClick={() => props.showDeleteTab(bc)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th className="table-actions">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdateTab, showDeleteTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)