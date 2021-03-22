import consts from '../consts'

const userKey = "_my_money_user"
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case consts.TOKEN_VALIDATED:
            if(action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        
        case consts.USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }

        default:
            return state
    }
}