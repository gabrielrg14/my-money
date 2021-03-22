import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/Grid'
import Input from '../common/form/Input'

import If from '../common/operator/If'

const CreditDebitList = props => {

    function addRowForm(index, item = {}) {
        if(!props.readOnly) {
            props.arrayInsert("billingCycleForm", props.fieldName, index, item)
        }
    }

    function removeRowForm(index) {
        if(!props.readOnly && props.list.length > 1) {
            props.arrayRemove("billingCycleForm", props.fieldName, index)
        }
    }

    function renderRows() {
        const list = props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${props.fieldName}[${index}].name`} component={Input} 
                        placeholder="Informe o nome" readOnly={props.readOnly} />
                </td>

                <td>
                    <Field name={`${props.fieldName}[${index}].value`} component={Input} 
                        placeholder="Informe o valor" readOnly={props.readOnly} />
                </td>

                <If test={props.fieldName === "debts"}>
                    <td>
                        <Field name={`${props.fieldName}[${index}].status`} component="select"
                            className="form-control" readOnly={props.readOnly}>
                            <option value="" defaultValue disabled>Informe o status</option>
                            <option value="PAGO">PAGO</option>
                            <option value="PENDENTE">PENDENTE</option>
                            <option value="AGENDADO">AGENDADO</option>
                        </Field>
                    </td>
                </If>

                <td>
                    <button type="button" className="btn btn-success" 
                        onClick={() => addRowForm(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>

                    <button type="button" className="btn btn-warning ml-5px" 
                        onClick={() => addRowForm(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>

                    <button type="button" className="btn btn-danger ml-5px" 
                        onClick={() => removeRowForm(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }
    
    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>{props.legend}</legend>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={props.fieldName === "debts"}>
                                <th>Status</th>
                            </If>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(CreditDebitList)