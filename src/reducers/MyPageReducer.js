import { PREV_MONTH, NEXT_MONTH,
         OPEN_VALIDATE_CONFIRM, CLOSE_VALIDATE_CONFIRM,
         OPEN_BADGE_ACQUIRED, CLOSE_BADGE_ACQUIRED } from "../actions/MyPageAction.js";

let initState = {
  year:  (new Date()).getFullYear(),
  month: (new Date()).getMonth(),
  validateConfirmVisible: false,
  badgeAcquiredVisible: false
};

export default (state=initState, action) => {
    switch(action.type) {
        case PREV_MONTH:
            var tmpDate = new Date();
            tmpDate.setYear(state.year);
            tmpDate.setMonth(state.month - 1);

            return Object.assign({}, state, {
              year: tmpDate.getFullYear(),
              month: tmpDate.getMonth()
            });
        case NEXT_MONTH:
            var tmpDate = new Date();
            tmpDate.setYear(state.year);
            tmpDate.setMonth(state.month + 1);

            return Object.assign({}, state, {
              year: tmpDate.getFullYear(),
              month: tmpDate.getMonth()
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
