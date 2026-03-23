function sorting(sArray) {
    var _a, _b, _c;
    var length = sArray.length;
    for (var i = 0; i < length; i++) {
        for (var j = 1; j < length - i; j++) {
            if (((_a = sArray[j]) !== null && _a !== void 0 ? _a : 0) < ((_b = sArray[j - 1]) !== null && _b !== void 0 ? _b : 0)) {
                var temp = sArray[j];
                sArray[j] = (_c = sArray[j - 1]) !== null && _c !== void 0 ? _c : 0;
                sArray[j - 1] = temp !== null && temp !== void 0 ? temp : 0;
            }
        }
    }
    return sArray;
}
console.log(sorting([5, 9, 3, 7, 0]));
