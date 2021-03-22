import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabHeader from '../common/tab/TabHeader'
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent'

import List from './BillingCycleList'
import Form from './BillingCycleForm'

import { init, createBillingCycle, updateBillingCycle, deleteBillingCycle } from './billingCycleActions'

class BillingCycle extends Component {

    componentDidMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>

                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.createBillingCycle} submitColor="primary" submitLabel="Incluir" />
                            </TabContent>

                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.updateBillingCycle} submitColor="info" submitLabel="Salvar" />
                            </TabContent>

                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.deleteBillingCycle} submitColor="danger" submitLabel="Excluir" readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    createBillingCycle,
    updateBillingCycle,
    deleteBillingCycle
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)