export const PREV_WEEK = "PREV_WEEK";
export const NEXT_WEEK = "NEXT_WEEK";
export const OPEN_VALIDATE = "OPEN_VALIDATE";
export const CLOSE_VALIDATE = "CLOSE_VALIDATE";

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

export function openValidate() {
    return {
        type: OPEN_VALIDATE
    };
}

export function closeValidate() {
    return {
        type: CLOSE_VALIDATE
    };
}
