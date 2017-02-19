export const DIMMING = "DIMMING";
export const UNDIMMING = "UNDIMMING";

export function dimming() {
    return {
        type: DIMMING
    };
};

export function undimming() {
    return {
        type: UNDIMMING
    };
};
