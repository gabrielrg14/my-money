import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'

import consts from '../consts'

class DashboardSemRedux extends Component {

    constructor(props) {
        super(props)

        this.state = { credit: 0, debt: 0 }
    }

    componentDidMount() {
        axios.get(`${consts.API_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state

        return (
            <div>
                <ContentHeader title="Dashboard Sem Redux" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" 
                            value={credit.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })} 
                            text="Total de Créditos"  />

                        <ValueBox cols="12 4" color="red" icon="credit-card" 
                            value={debt.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })} 
                            text="Total de Débitos" />
                            
                        <ValueBox cols="12 4" color="blue" icon="money" 
                            value={(credit - debt).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })} 
                            text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default DashboardSemRedux