export const PREV_MONTH = "PREV_MONTH";
export const NEXT_MONTH = "NEXT_MONTH";
export const OPEN_VALIDATE_CONFIRM = "OPEN_VALIDATE_CONFIRM";
export const CLOSE_VALIDATE_CONFIRM = "CLOSE_VALIDATE_CONFIRM";
export const OPEN_BADGE_ACQUIRED = "OPEN_BADGE_ACQUIRED";
export const CLOSE_BADGE_ACQUIRED = "CLOSE_BADGE_ACQUIRED";

export function prevMonth() {
    return {
        type: PREV_MONTH
    };
}

export function nextMonth() {
    return {
        type: NEXT_MONTH
    };
}

export function openValidateConfirm() {
    return {
        type: OPEN_VALIDATE_CONFIRM
    };
}

export function closeValidateConfirm() {
    return {
        type: CLOSE_VALIDATE_CONFIRM
    };
}

export function openBadgeAcquired() {
    return {
      type: OPEN_BADGE_ACQUIRED
    };
}

export function closeBadgeAcquired() {
    return {
      type: CLOSE_BADGE_ACQUIRED
    };
}
