import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/LabelAndInput'
import Summary from './BillingCycleSummary'
import CreditDebitList from './CreditDebitList'

import { init } from './billingCycleActions'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (total, value) => total + value

        return {
            sumOfCredits: this.props.credits.map(credit => +credit.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(debt => +debt.value || 0).reduce(sum)
        }
    }

    render() {
        // handleSubmit é um método do reduxForm gerado pelo seu decorator
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (
            <form onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} readOnly={readOnly}
                        label="Nome" cols="12 4" placeholder="Informe o nome" /> 
                        
                    <Field name="month" component={LabelAndInput} readOnly={readOnly}
                        label="Mês" cols="12 4" placeholder="Informe o mês" type="number" /> 

                    <Field name="year" component={LabelAndInput} readOnly={readOnly}
                        label="Ano" cols="12 4" placeholder="Informe o ano" type="number" />

                    <Summary credit={sumOfCredits} debt={sumOfDebts} />

                    <CreditDebitList cols="12 6" legend="Créditos" list={credits} fieldName="credits" readOnly={readOnly} />
                    <CreditDebitList cols="12 6" legend="Débitos" list={debts} fieldName="debts" readOnly={readOnly} />
                </div>

                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitColor}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default ml-5px" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(BillingCycleForm)
const formSelector = formValueSelector("billingCycleForm")

const mapStateToProps = state => ({ credits: formSelector(state, "credits"), debts: formSelector(state, "debts") })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)