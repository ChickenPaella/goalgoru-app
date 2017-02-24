export const PREV_WEEK = "PREV_WEEK";
export const NEXT_WEEK = "NEXT_WEEK";
export const OPEN_VALIDATE_CONFIRM = "OPEN_VALIDATE_CONFIRM";
export const CLOSE_VALIDATE_CONFIRM = "CLOSE_VALIDATE_CONFIRM";
export const OPEN_BADGE_ACQUIRED = "OPEN_BADGE_ACQUIRED";
export const CLOSE_BADGE_ACQUIRED = "CLOSE_BADGE_ACQUIRED";

export function prevWeek() {
    return {
        type: PREV_WEEK
    };
}

export function nextWeek() {
    return {
        type: NEXT_WEEK
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
