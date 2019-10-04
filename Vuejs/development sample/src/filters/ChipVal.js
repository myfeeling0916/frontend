const Digit_M = 1000000;
const Digit_K = 1000;

export const ChipVal = data => {
    let val = parseInt(data, 10);
    if (isNaN(val)) {
        val = 0;
    }
    const p = val >= 0 ? "" : "-";
    val = Math.abs(val);
    let prefix;
    if (val >= Digit_M) {
        prefix = val / Digit_M;
        return `${p}${prefix}M`;
    } else if (val >= Digit_K) {
        prefix = val / Digit_K;
        return `${p}${prefix}K`;
    }
    return `${p}${val}`;
}