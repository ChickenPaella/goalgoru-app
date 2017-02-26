import { OPEN_CONFIRM_POPUP, OPEN_STANDBY_POPUP, CLOSE_CONFIRM_POPUP } from "../actions/ConfirmPopupAction";

let initState = {
    messate: "구매하시겠습니까?",
    mode: 0,
    product: "[국대떡볶이] 튀김 + 어묵 세트 1인분",
    visible: false,
}

export default (state=initState, action) => {
    switch(action.type) {
        case OPEN_CONFIRM_POPUP:
            return Object.assign({}, state, {
                message: action.message,
                mode: 0,
                product: action.product,
                visible: true,
            });
        case OPEN_STANDBY_POPUP:
            return Object.assign({}, state, {
                messge: action.message,
                mode: 1,
                product: action.product,
                visible: true
            });
        case CLOSE_CONFIRM_POPUP:
            return Object.assign({}, state, {
                visible: false
            })
        default:
            return state;
    }
}
