export const OPEN_POPUP = "OPEN_POPUP";
export const CLOSE_POPUP = "CLOSE_POPUP";

export function openPopup(title, content) {
    return {
        type: OPEN_POPUP,
        visible: true,
        title: title,
        content: content
    };
}

export function closePopup() {
    return {
        type: CLOSE_POPUP,
        visible: false,
        title: null,
        content: null
    }
}
