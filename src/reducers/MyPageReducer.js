import { PREV_MONTH, NEXT_MONTH,
         OPEN_VALIDATE_CONFIRM, CLOSE_VALIDATE_CONFIRM,
         OPEN_BADGE_ACQUIRED, CLOSE_BADGE_ACQUIRED } from "../actions/MyPageAction.js";

let initState = {
  date: new Date(),
  validateConfirmVisible: false,
  badgeAcquiredVisible: false
};

export default (state=initState, action) => {
    switch(action.type) {
        case PREV_MONTH:
            return Object.assign({}, state, {
              date: state.date.setMonth(state.date.getMonth() - 1)
            });
        case NEXT_MONTH:
            return Object.assign({}, state, {
              date: state.date.setMonth(state.date.getMonth() + 1)
            });
        case OPEN_VALIDATE_CONFIRM:
            return Object.assign({}, state, {
              validateConfirmVisible: true
            });
        case CLOSE_VALIDATE_CONFIRM:
            return Object.assign({}, state, {
              validateConfirmVisible: false
            });
        case OPEN_BADGE_ACQUIRED:
            return Object.assign({}, state, {
              badgeAcquiredVisible: true
            });
        case CLOSE_BADGE_ACQUIRED:
            return Object.assign({}, state, {
              badgeAcquiredVisible: false
            });
        default:
            return state;
    }
};
