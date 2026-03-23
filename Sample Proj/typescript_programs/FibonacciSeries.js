function fibonacciSeries(fab) {
    var _a, _b;
    if (fab == 0)
        return [];
    if (fab == 1)
        return [0];
    var series = [0, 1];
    for (var i = 2; i < fab; i++) {
        series[i] = ((_a = series[i - 1]) !== null && _a !== void 0 ? _a : 0) + ((_b = series[i - 2]) !== null && _b !== void 0 ? _b : 0);
    }
    return series;
}
console.log("Fibonacci Of : ", fibonacciSeries(2));
