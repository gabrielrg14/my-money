import consts from '../consts'

const INITIAL_STATE = { summary: { credit: 0, debt: 0 } }

export default function dashboardReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case consts.BILLING_SUMMARY_FETCHED:
            return { ...state, summary: action.payload.data }

        default:
            return state
    }
}