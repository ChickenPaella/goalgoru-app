export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_ACTION_BAR_MODE = "CHANGE_ACTION_BAR_MODE";
export const CHANGE_ACTION_BAR_TRANSPARENT = "CHANGE_ACTION_BAR_TRANSPARENT";

export function changeTitle(title) {
    return {
        type: CHANGE_TITLE,
        title: title
    }
}

export function setActionBarBase() {
    return {
        type: CHANGE_ACTION_BAR_MODE,
        mode: 0
    }
}

export function setActionBarBackward() {
    return {
        type: CHANGE_ACTION_BAR_MODE,
        mode: 1
    }
}

export function setActionBarHome() {
    return {
        type: CHANGE_ACTION_BAR_MODE,
        mode: 2
    }
}

export function setActionBarOnlyBackward() {
    return {
        type: CHANGE_ACTION_BAR_MODE,
        mode: 3
    }
}

export function setActionBarTransparent(transparent) {
    return {
        type: CHANGE_ACTION_BAR_TRANSPARENT,
        transparent: !!transparent
    }
}
