import consts from '../../consts'

const INITIAL_STATE = { selected: '', visible: {} }

export default function tabReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case consts.TAB_SELECTED:
            return { ...state, selected: action.payload }

        case consts.TAB_SHOWED:
            return { ...state, visible: action.payload }
            
        default:
            return state
    }
}