var _Math = {
    sqrt: Math.sqrt,
    EPZ2: 0.000001,
    degtorad: 0.0174532925199432957,

    Clamp: function (value: number, min: number, max: number) {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    },

    dotVectors: function (a, b) {

        return a.x * b.x + a.y * b.y + a.z * b.z;

    }
}

export { _Math };