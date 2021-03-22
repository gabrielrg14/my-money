import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

import consts from '../consts'

const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {
    const request = axios.get(`${consts.API_URL}/billingCycles`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function init() {
    return [
        showTabs("tabList", "tabCreate"),
        selectTab("tabList"),
        getList(),
        initialize("billingCycleForm", INITIAL_VALUES)
    ]
}

export function showUpdateTab(billingCycle) {
    return [
        showTabs("tabUpdate"),
        selectTab("tabUpdate"),
        initialize("billingCycleForm", billingCycle)
    ]
}

export function showDeleteTab(billingCycle) {
    return [
        showTabs("tabDelete"),
        selectTab("tabDelete"),
        initialize("billingCycleForm", billingCycle)
    ]
}

export function createBillingCycle(values) {
    return submit(values, "post", "cadastrado")
}

export function updateBillingCycle(values) {
    return submit(values, "put", "alterado")
}

export function deleteBillingCycle(values) {
    return submit(values, "delete", "excluído")
}

function submit(values, method, wordSuccess) {
    return dispatch => {
        const id = values._id ? values._id : ''

        axios[method](`${consts.API_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success("Sucesso", `Ciclo de Pagamento ${wordSuccess} com sucesso!`)
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}