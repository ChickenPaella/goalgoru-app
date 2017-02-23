export const PREV_WEEK = "PREV_WEEK";
export const NEXT_WEEK = "NEXT_WEEK";

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
