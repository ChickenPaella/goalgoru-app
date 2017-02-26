export const CLOSE_CONFIRM_POPUP = "CLOSE_CONFIRM_POPUP";
export const OPEN_CONFIRM_POPUP = "OPEN_CONFIRM_POPUP";
export const OPEN_STANDBY_POPUP = "OPEN_STANDBY_POPUP";

export function openConfirmPopup(product, message) {
    return {
        type: OPEN_CONFIRM_POPUP,
        mode: 0,
        message: message,
        product: product,
        visible: true
    }
}

export function closeConfirmPopup() {
    return {
        type: CLOSE_CONFIRM_POPUP,
        visible: false,
    }
}

export function openStandbyPopup(product, message) {
    return {
        type: OPEN_STANDBY_POPUP,
        message: message,
        product: product,
        visible: true
    }
}
