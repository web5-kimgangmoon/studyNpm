"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(current, next, min, max) {
    const gap = max - min + 1;
    const distance = Math.abs(current - next);
    return distance > gap / 2
        ? [
            [next, distance],
            [next - gap, Math.abs(current - (next - gap))],
            [next + gap, Math.abs(current - (next + gap))],
        ].sort((a, b) => {
            return a[1] - b[1];
        })[0]
        : [next, distance];
}
