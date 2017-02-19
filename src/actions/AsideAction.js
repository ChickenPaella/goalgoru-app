export const TOGGLE_ASIDE = "TOGGLE_ASIDE";
export const OPEN_ASIDE = "OPEN_ASIDE";
export const CLOSE_ASIDE = "CLOSE_ASIDE";

export function toggleAside() {
    return {
        type: TOGGLE_ASIDE
    };
};

export function openAside() {
    return {
        type: OPEN_ASIDE
    };
};

export function closeAside() {
    return {
        type: CLOSE_ASIDE
    };
};
